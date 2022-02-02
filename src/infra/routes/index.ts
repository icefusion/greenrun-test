import { Router } from 'express';

import { authRouter } from './auth.routes';
import { transactionRouter } from './transaction.routes';
import { userRouter } from './user.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/transactions', transactionRouter);

export { routes };
