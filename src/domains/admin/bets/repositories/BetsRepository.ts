import { knex } from "infra/database/knex";

class BetsRepository {
  public async getBets(): Promise<any> { 
    const result = await knex('bets')
      .where('deleted', 0)
      .select(
        'bet_option', 
        'sport',
        'status',
        'name',
        'event_id',
        'odd',
        'result',
      );

      return JSON.parse(JSON.stringify(result));
    }

  public async getBetsByEvent(eventId: number): Promise<any> { 
    const result = await knex('bets')
      .where('event_id', eventId)
      .andWhere('deleted', 0)
      .select(
        'bet_option', 
        'sport',
        'status',
        'name',
        'event_id',
        'odd',
        'result',
      );

    return JSON.parse(JSON.stringify(result));
  }

  public async getBetsBySport(sport: string): Promise<any> { 
    const result = await knex('bets')
      .where('sport', sport)
      .andWhere('deleted', 0)
      .select(
        'bet_option', 
        'sport',
        'status',
        'name',
        'event_id',
        'odd',
        'result',
      );

    return JSON.parse(JSON.stringify(result));
  }
}

export { BetsRepository }