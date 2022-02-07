import { knex } from "infra/database/knex";
import { IUpdateUserDbRequest } from "../interfaces/IUpdateUserDbRequest";
import { IInsertUserDbRequest } from '../interfaces/IInsertUserDbRequest';


class UserRepository {
  public async updateUserData(userId: number, request: IUpdateUserDbRequest) {
    return await knex('users')
      .where("id", userId)
      .update(request);
  }

  public async create(request: IInsertUserDbRequest) {
    return await knex('users')
      .insert(request)
      .returning('id');
  }
}

export { UserRepository }