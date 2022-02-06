import { Router } from 'express';

import { authRouter } from './auth.routes';
import { transactionRouter } from './transaction.routes';
import { userRouter } from './user.routes';
import { betsRouter } from './bets.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/transactions', transactionRouter);
routes.use('/bets', betsRouter);

export { routes };
