import { TransactionController } from 'domains/admin/transactions/controllers/TransactionsController';
import { Router } from 'express';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const adminTransactionsRouter = Router();

const transactionController = new TransactionController();

adminTransactionsRouter.get('/', AdminAuthMiddleware,  async (request, response) => {
  return transactionController.getTransactions(request, response);
});

adminTransactionsRouter.get('/user/:id', AdminAuthMiddleware, async (request, response) => {
  return transactionController.getTransactionsByUser(request, response);
});

adminTransactionsRouter.get('/user/:id/category/:category', AdminAuthMiddleware, async (request, response) => {
  return transactionController.getTransactionsByCategory(request, response);
});

adminTransactionsRouter .get('/balance/user/:id', async (request, response) => {
  return transactionController.getBalanceByUser(request, response);
});

export { adminTransactionsRouter };