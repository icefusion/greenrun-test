import { IResultsRequest } from "../interfaces/IResultsRequest";
import { BetsRepository } from "../repositories/BetsRepository";
import { UserBetsRepository } from "../../usersBets/repositories/UserBetsRepository";
import { TransactionsRepository } from "domains/admin/transactions/repositories/TransactionsRepository";

class BetsService {
  private betsRepository = new BetsRepository();
  private userBetsRepository = new UserBetsRepository();
  private transactionsRepository = new TransactionsRepository();

  public async getBets(): Promise<any> {
    return await this.betsRepository.getBets();  
  }

  public async getBetsByEvent(eventId: number): Promise<any> {
    return await this.betsRepository.getBetsByEvent(eventId);  
  }

  public async getBetsBySport(sport: string): Promise<any> {
    return await this.betsRepository.getBetsBySport(sport);  
  }

  public async updateBetsStatus(id: number, status: string): Promise<any> {
    const bet = await this.betsRepository.getBetsById(id);

    if (!bet) {
      return 'Not Found Bet';
    }

    if (bet.status === 'settled') {
      return 'Not Allowed, Bet already settled.';
    }

    const updated = await this.betsRepository.updateBetsStatus(id, status); 

    if (!updated) {
      return 'Not Updated';
    }

    return 'Successfully updated';
  }

  public async setResultsByEvent(id: number, request: IResultsRequest[]): Promise<any> {
    if (request.length <= 0) {
      return 'Not Allowed';
    }

    for (const result of request) {
      await this.betsRepository.setResultsByEvent(id, result);  
    }

    const winnerItem = request.reduce((previous, current) => {
      return (previous.result > current.result) ? previous : current;
    });

    const winnerBet = await this.betsRepository.getWinner(id, winnerItem.option);

    console.log(winnerBet);

    const winners = await this.userBetsRepository.getUserWinnerBets(winnerBet.id);

    if (winners.length <= 0) {
      return false;
    }

    return await this.setPayments(winners);
  }

  public async setPayments(winners) {
    try {
      for (const item of winners) {
        const payment = item.odd * item.amount;
        await this.transactionsRepository.setPayment({
          user_id: item.user_id,
          amount: payment,
          category: 'winning',
          status: 'active',
          deleted: 0
        })
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export { BetsService };