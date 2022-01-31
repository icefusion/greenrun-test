import { Request, Response } from 'express';
import { BetUsersService } from '../services/BetUsersService';


class BetUsersController {
  private betUsersService = new BetUsersService();

  public async login(request: Request, response: Response): Promise<Response> {
    const { userId, betId, amount } = request.body;

    const result =
      await this.betUsersService.place(
        userId,
        betId,
        amount
      );

    return response.status(200).json(result);
  }
}

export { BetUsersController };