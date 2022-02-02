import { Router } from 'express';
import { TransactionController } from 'domains/users/transactions/controllers/TransactionController';

import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const transactionRouter = Router();

const transactionController = new TransactionController();

transactionRouter.post('/deposit', AuthMiddleware, async (request, response) => {
  return transactionController.deposit(request, response);
});

transactionRouter.post('/withdraw', AuthMiddleware, async (request, response) => {
  return transactionController.withdraw(request, response);
});

transactionRouter.get('/balance/:id', async (request, response) => {
  return transactionController.getBalanceByUser(request, response);
});

transactionRouter.get('/:id', async (request, response) => {
  return transactionController.getTransactionsByUser(request, response);
});

transactionRouter.get('/:id/category/:category', async (request, response) => {
  return transactionController.getTransactionsByUserCategory(request, response);
});




export { transactionRouter };