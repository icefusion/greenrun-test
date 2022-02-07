import { knex } from "infra/database/knex";
import { IResultsRequest } from "../interfaces/IResultsRequest";

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

  public async setResultsByEvent(id: number, request: IResultsRequest): Promise<any> { 
    try {
      const result = await knex('bets')
        .where('event_id', id)
        .andWhere('bet_option', request.option)
        .update({
          result: request.result,
          status: 'settled'
        })

      if (!result) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    } 
  }

  public async getWinner(id: number, option: number) {
    try {
      const result = await knex('bets')
        .where('event_id', id)
        .andWhere('bet_option', option)
        .andWhere('deleted', 0)
        .andWhere('status', 'active')
        .select(
          'id',
          'bet_option',
          'sport',
          'status',
          'name',
          'event_id',
          'odd',
          'result'
        )
        .first();

        if (!result) {
          return false;
        }

        return JSON.parse(JSON.stringify(result));
    } catch (err) {
      return false;
    }
  }
}

export { BetsRepository }