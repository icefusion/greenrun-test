import { BetRepository } from 'domains/users/bet/repositories/BetRepository';
import { IPlaceBetDbRequest } from '../interfaces/IPlaceBetDbRequest';
import { format } from 'date-fns';
import { BetUsersRepository } from '../repositories/BetUsersRepository';


class BetUsersService {
  private betRepository = new BetRepository();
  private betUsersRepository = new BetUsersRepository();

  public async place(userId: number,
    betId: number,
    amount: number
  ) {
    try {      
      const bet = await this.betRepository.findById(betId);

      if (!bet) {
        
      }

      const preparedData = this.prepareBetUserData(
        userId,
        betId,
        bet.odd,
        amount
      );

      const result = this.betUsersRepository.place(preparedData);

      if (!result) {
        
      }

      return {
        userId,
        betId,
        amount
      }

    } catch (err) {
      
    }
  }

  private prepareBetUserData(
    userId: number,
    betId: number,
    odd: number,
    amount: number
  ): IPlaceBetDbRequest {
    return {
      user_id: userId,
      bet_id: betId,
      odd: odd,
      amount: amount,
      state: 'open',
      created_at: format(Date.now(), 'yyyy-MM-dd'),
      updated_at: format(Date.now(), 'yyyy-MM-dd'),
      deleted: false
    };
  }

}

export { BetUsersService }