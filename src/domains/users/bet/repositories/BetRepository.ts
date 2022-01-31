
import { knex } from "infra/database/knex";
import { IBet } from "../interfaces/IBet";

class BetRepository {
  public async findById(userId: number): Promise<IBet> {
    return await knex('bets')
      .where('id', userId)
      .select('id',
        'bet_option',
        'sport',
        'status',
        'name',
        'event_id',
        'odd',
        'result',
        'deleted',
        'created_at',
        'updated_at',
        'deleted_at'
      )
      .first();
  }
}

export { BetRepository }