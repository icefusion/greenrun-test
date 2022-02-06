import { Router } from 'express';
import { TransactionController } from 'domains/users/transactions/controllers/TransactionController';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';
import { UserAuthMiddleware } from '../middlewares/UserAuthMiddleware';

const transactionRouter = Router();

const transactionController = new TransactionController();

transactionRouter.post('/deposit', UserAuthMiddleware, async (request, response) => {
  return transactionController.deposit(request, response);
});

transactionRouter.post('/withdraw', UserAuthMiddleware, async (request, response) => {
  return transactionController.withdraw(request, response);
});

transactionRouter.get('/balance/:id', UserAuthMiddleware, async (request, response) => {
  return transactionController.getBalanceByUser(request, response);
});

transactionRouter.get('/:id', UserAuthMiddleware, async (request, response) => {
  return transactionController.getTransactionsByUser(request, response);
});

transactionRouter.get('/:id/category/:category', UserAuthMiddleware, async (request, response) => {
  return transactionController.getTransactionsByUserCategory(request, response);
});




export { transactionRouter };