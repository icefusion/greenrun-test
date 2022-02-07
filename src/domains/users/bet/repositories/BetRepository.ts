import { knex } from "infra/database/knex";

class BetsRepository {
  public async getBetsById(id: number): Promise<any> { 
    try {
      const result = await knex('bets')
        .where('id', id)
        .select(
          'id',
          'bet_option', 
          'sport',
          'status',
          'name',
          'event_id',
          'odd',
          'result',
        )
        .first();

      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      return false;
    } 
  }
}

export { BetsRepository }