import { Request, Response } from 'express';
import { TransactionService } from '../services/TransactionService';

class TransactionController {
  private transactionService = new TransactionService();

  public async deposit(request: Request, response: Response): Promise<Response> {
    const { userId, betId, amount } = request.body;

    const category = 'deposit';

    const result =
      await this.transactionService.place({
        userId, 
        betId, 
        amount, 
        category
      });

    return response.status(200).json(result);
  }

  public async withdraw(request: Request, response: Response): Promise<Response> {
    const { userId, betId, amount } = request.body;

    const category = 'withdraw';

    const result =
      await this.transactionService.place({
        userId,
        betId,
        amount,
        category
      });

    return response.status(200).json(result);
  }
}

export { TransactionController };