import { format } from "date-fns";
import { IPlaceRequest } from "../interfaces/IPlaceRequest";
import { TransactionRepository } from "../repositories/TransactionRepository";


class TransactionService {
  private transactionRepository = new TransactionRepository();
  
  public async place(request: IPlaceRequest) {
    const actualDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); 

    const data = {
      user_id: request.userId,
      amount: request.amount,
      category: request.category,
      status: 'active',
      created_at: actualDate,
      updated_at: actualDate
    }

    return await this.transactionRepository.place(data);
  }

  public async balanceByUser(userId: number): Promise<any> {
    const transactions = await this.transactionRepository.getBalanceByUserId(userId);

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

  public async getTransactionsByUserId(userId: number): Promise<any> {
    return await this.transactionRepository.getTransactionsByUserId(userId);  
  }

  public async getTransactionsByUserCategory(userId: number, category: string): Promise<any> {
    return await this.transactionRepository.getTransactionsByUserCategory(userId, category);  
  }
}

export { TransactionService };