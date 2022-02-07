import { format } from "date-fns";
import { IPlaceRequest } from "../interfaces/IPlaceRequest";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { BetUsersRepository } from "domains/users/usersBet/repositories/BetUsersRepository";
import { BetsRepository } from "domains/users/bet/repositories/BetRepository";

class TransactionService {
  private transactionRepository = new TransactionRepository();
  private betsUsersRepository = new BetUsersRepository();
  private betRepository = new BetsRepository();
  
  public async place(request: IPlaceRequest) {
    if (request.category.includes('withdraw')) {
      return this.executeDependsLimitOperations(request);
    }

    const actualDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); 

    let data = {
      user_id: request.userId,
      user_bet_id: request.betId ?? null,
      amount: request.amount,
      category: request.category,
      status: 'active',
      created_at: actualDate,
      updated_at: actualDate
    }

    const result = await this.transactionRepository.place(data);

    if (!result) {
      return 'Not Placed';
    }

    return 'Place Operation';
  }

  public async bet(request: IPlaceRequest) {
    try {
      const balance = await this.balanceByUser(request.userId);

      if (balance < request.amount) {
        return 'Not Allowed';
      }

      const bet = await this.betRepository.getBetsById(request.betId);

      if (!bet) {
        return 'Not Allowed';
      }

      const actualDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); 

      let data = {
        user_id: request.userId,
        amount: request.amount,
        category: request.category,
        status: 'active',
        created_at: actualDate,
        updated_at: actualDate
      }

      const result = await this.transactionRepository.place(data);

      if (!result[0]) {
        return 'Not Placed';
      }

      const betResult = await this.betsUsersRepository.place({
        user_id: request.userId,
        bet_id: request.betId,
        odd: bet.odd,
        amount: request.amount,
        state: 'active',
        deleted: false,
        created_at: actualDate,
        updated_at: actualDate
      })

      if (!betResult) {
        this.transactionRepository.deleteById(result[0])
        return 'Not Placed';
      }

      return 'Place Operation';
    } catch(err) {
      return 'Not Placed';
    }
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

  public async executeDependsLimitOperations(request: IPlaceRequest) {
    const balance = await this.balanceByUser(request.userId);

    if (balance < request.amount) {
      return 'Not Allowed';
    }

    const actualDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); 

    const data = {
      user_id: request.userId,
      amount: request.amount,
      category: request.category,
      status: 'active',
      created_at: actualDate,
      updated_at: actualDate
    }

    const result = await this.transactionRepository.place(data);

    if (!result) {
      return 'Not Placed';
    }

    return 'Place Operation';
  }
}

export { TransactionService };