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


export { transactionRouter };