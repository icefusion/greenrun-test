import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import Youch from 'youch';

import swaggerFile from '../docs/swagger.json';
import AppError from './errors/AppError';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  async (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (process.env.NODE_ENV !== 'production') {
      const errors = await new Youch(err, request).toJSON();

      return response.status(500).json(errors);
    }

    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
