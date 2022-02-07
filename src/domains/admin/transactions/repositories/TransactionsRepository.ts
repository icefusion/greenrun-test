import { knex } from "infra/database/knex";

class TransactionsRepository {
  public async getBalanceByUserId(userId: number): Promise<any> {
    const result = await knex('transactions')
      .where('user_id', userId)
      .select('category', 'amount');

    if (!result) {
      return [];
    }

    return JSON.parse(JSON.stringify(result));
  }
  
  public async getTransactions(): Promise<any> { 
    const result = await knex('transactions')
      .andWhere('deleted', 0)
      .select(
        'category', 
        'amount',
        'status',
        'user_bet_id'
      );

      return JSON.parse(JSON.stringify(result));
  }

  public async getTransactionsByUser(userId: number): Promise<any> { 
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

  public async getTransactionsByCategory(userId: number, category: string): Promise<any> { 
    const result = await knex('transactions')
      .where('user_id', userId)
      .andWhere('category', category)
      .andWhere('deleted', 0)
      .select(
        'category', 
        'amount',
        'status',
        'user_bet_id'
      );

    return JSON.parse(JSON.stringify(result));
  }

  public async setPayment(data: any) {
    return await knex('transactions')
      .insert(data);
  }
}

export { TransactionsRepository }