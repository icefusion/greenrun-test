import { TransactionController } from 'domains/admin/transactions/controllers/TransactionsController';
import { Router } from 'express';

// import { AdminAuthMiddleware } from '../middlewares/UserAuthMiddleware';

const adminTransactionsRouter = Router();

const transactionController = new TransactionController();

adminTransactionsRouter.get('/',  async (request, response) => {
  return transactionController.getTransactions(request, response);
});

adminTransactionsRouter.get('/user/:id',  async (request, response) => {
  return transactionController.getTransactionsByUser(request, response);
});

adminTransactionsRouter.get('/user/:id/category/:category',  async (request, response) => {
  return transactionController.getTransactionsByCategory(request, response);
});

export { adminTransactionsRouter };