import { knex } from "infra/database/knex";
import { IUpdateUserDbRequest } from "../interfaces/IUpdateUserDbRequest";


class UserRepository {
  public async updateUserData(userId: number, request: IUpdateUserDbRequest) {
    return await knex('user')
      .where("id", userId)
      .update(request);
  }
}

export { UserRepository }