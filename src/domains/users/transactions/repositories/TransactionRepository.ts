import { knex } from "infra/database/knex";
import { IPlaceTransactionDbRequest } from "../interfaces/IPlaceTransactionDbRequest";

class TransactionRepository {
  public async place(request: IPlaceTransactionDbRequest) {
    return await knex('transactions').insert(request);
  }

  public async getBalanceByUserId(userId: number): Promise<any> {
    const result = await knex('transactions')
      .where('user_id', userId)
      .select('category', 'amount');

    if (!result) {
      return [];
    }

    return JSON.parse(JSON.stringify(result));
  }

  public async getTransactionsByUserId(userId: number): Promise<any> { 
    const result = await knex('transactions')
      .where('user_id', userId)
      .andWhere('deleted', 0)
      .select(
        'category', 
        'amount',
        'status',
        'user_bet_id'
      );

      return JSON.parse(JSON.stringify(result));
    }

  public async getTransactionsByUserCategory(userId: number, category: string): Promise<any> { 
    const result = await knex('transactions')
      .where('user_id', userId)
      .andWhere('deleted', 0)
      .andWhere('category', category)
      .select(
        'category', 
        'amount',
        'status',
        'user_bet_id'
      );

    return JSON.parse(JSON.stringify(result));
  }
}

export { TransactionRepository }