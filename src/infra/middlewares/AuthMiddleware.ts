import { NextFunction, Request, Response } from 'express';
import { DecodedToken } from 'infra/types';
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';
import authConfig from '../../config';
import knex from 'knex';

async function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<any> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token as string,
      authConfig.jwt.secret,
    ) as DecodedToken;

    const user = await knex('users').where({username: ''});

    request.user = { id: decoded.sub };

    return next();
  } catch (err) {
    return response
      .status(401)
      .json({ error: true, code: 'token.expired', message: 'Token invalid.' });
  }
}

export { AuthMiddleware };
