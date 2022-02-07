import { knex } from "infra/database/knex";

class UserBetsRepository {
  public async getUserWinnerBets(id: number) {
    try {
      console.log(id);
      const result = await knex('users_bet')
        .where('bet_id', id)
        .andWhere('state', 'active')
        .andWhere('deleted', 0)
        .select(
          'user_id',
          'bet_id',
          'amount',
          'odd'
        );

        if (!result) {
          return false;
        }

        return JSON.parse(JSON.stringify(result));
    } catch (err) {
      return false;
    }
  }
}

export { UserBetsRepository }