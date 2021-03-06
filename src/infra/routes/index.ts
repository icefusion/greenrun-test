import { Router } from 'express';

import { authRouter } from './auth.routes';
import { transactionRouter } from './transaction.routes';
import { userRouter } from './user.routes';
import { adminBetsRouter } from './admin.bets.routes';
import { adminTransactionsRouter } from './admin.transaction.routes';
import { adminUserRouter } from './admin.user.routes';
import { swaggerRouter } from './swagger.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/transactions', transactionRouter);
routes.use('/admin/bets', adminBetsRouter);
routes.use('/admin/transactions', adminTransactionsRouter);
routes.use('/admin/users', adminUserRouter);
routes.use('/docs', swaggerRouter);

export { routes };
