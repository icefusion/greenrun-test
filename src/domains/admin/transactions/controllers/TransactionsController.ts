import { Request, Response } from 'express';
import { TransactionsService } from '../services/TransactionsService';

class TransactionController {
  private transactionsService = new TransactionsService();

  public async getTransactions(request: Request, response: Response): Promise<Response> {
    const result = await this.transactionsService.getTransactions();

    return response.status(200).json(result);
  }

  public async getTransactionsByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
  
    const result = await this.transactionsService.getTransactionsByUser(id);

    return response.status(200).json(result);
  }

  public async getTransactionsByCategory(request: Request, response: Response): Promise<Response> {
    const { id, category } = request.params;
  
    const result = await this.transactionsService.getTransactionsByCategory(id, category);

    return response.status(200).json(result);
  }
}

export { TransactionController };