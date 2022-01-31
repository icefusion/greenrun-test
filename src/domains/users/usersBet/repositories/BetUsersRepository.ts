import { knex } from "infra/database/knex";
import { IPlaceBetDbRequest } from "../interfaces/IPlaceBetDbRequest";

class BetUsersRepository {
  public async place(request: IPlaceBetDbRequest) {
    return await knex('users_bet').insert(request);
  }

}

export { BetUsersRepository }