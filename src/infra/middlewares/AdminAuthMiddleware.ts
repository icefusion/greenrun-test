import { NextFunction, Request, Response } from 'express';
import { DecodedToken } from 'infra/types';
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';
import authConfig from '../../config';

async function AdminAuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<any> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  console.log(authHeader);

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token as string,
      authConfig.jwt.secret,
    ) as DecodedToken;

    if (decoded.role != 'admin') {
      throw new AppError('Unauthorized Access', 401);
    }

    request.user = { id: decoded.sub };

    return next();
  } catch (err) {
    return response
      .status(401)
      .json({ error: true, message: err.message ?? 'Token invalid.' });
  }
}

export { AdminAuthMiddleware };
