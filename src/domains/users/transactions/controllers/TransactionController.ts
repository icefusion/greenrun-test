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

  public async getBalanceByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const result = await this.transactionService.balanceByUser(id);

    return response.status(200).json({total: result});
  }

  public async getTransactionsByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
  
    const result = await this.transactionService.getTransactionsByUserId(id);

    return response.status(200).json(result);
  }

  public async getTransactionsByUserCategory(request: Request, response: Response): Promise<Response> {
    const { id, category } = request.params;
  
    const result = await this.transactionService.getTransactionsByUserCategory(id, category);

    return response.status(200).json(result);
  }
}

export { TransactionController };