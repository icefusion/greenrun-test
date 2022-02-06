import { TransactionsRepository } from "../repositories/TransactionsRepository";

class TransactionsService {
  private transactionsRepository = new TransactionsRepository();

  public async getTransactions(): Promise<any> {
    return await this.transactionsRepository.getTransactions();  
  }

  public async getTransactionsByUser(userId: number): Promise<any> {
    return await this.transactionsRepository.getTransactionsByUser(userId);  
  }

  public async getTransactionsByCategory(userId: number, category: string): Promise<any> {
    return await this.transactionsRepository.getTransactionsByCategory(userId, category);  
  }
}

export { TransactionsService };