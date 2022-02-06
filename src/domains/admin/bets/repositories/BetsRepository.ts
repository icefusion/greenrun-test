import { knex } from "infra/database/knex";

class BetsRepository {
  public async getBets(): Promise<any> { 
    try {
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
    } catch (err) {
      return false;
    } 
    
  }

  public async getBetsByEvent(eventId: number): Promise<any> { 
    try {
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
    } catch (err) {
      return false;
    } 
  }

  public async getBetsBySport(sport: string): Promise<any> { 
    try {
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
    } catch (err) {
      return false;
    } 
  }

  public async updateBetsStatus(id: number, status: string): Promise<any> { 
    try {
      const result = await knex('bets')
        .where('event_id', id)
        .update({
          status: status
        })

      return true;
    } catch (err) {
      return false;
    } 
  }
}

export { BetsRepository }