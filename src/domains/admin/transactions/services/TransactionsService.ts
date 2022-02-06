import { TransactionsRepository } from "../repositories/TransactionsRepository";

class TransactionsService {
  private transactionsRepository = new TransactionsRepository();

  public async balanceByUser(userId: number): Promise<any> {
    const transactions = await this.transactionsRepository.getBalanceByUserId(userId);

    const initialValue = 0;

    return transactions.reduce((total, item) => {
      switch(item.category) {
        case 'deposit':
        case 'winning':
          return total + item.amount;
        
        case 'withdraw':
        case 'bet':
          return total - item.amount;

        default:
          return total;
      }
    }, initialValue);    
  }

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