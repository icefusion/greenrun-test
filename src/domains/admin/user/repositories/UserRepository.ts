import { knex } from "infra/database/knex";
import { IInsertUserDbRequest } from '../interfaces/IInsertUserDbRequest';
import { IUpdateUserDbRequest } from "../interfaces/IUpdateUserDbRequest";

class UserRepository {
  public async updateStatusUser(userId: number, status: string) {
    try {
      await knex('users')
        .where("id", userId)
        .update({user_state: status});

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public async getUserById(userId: number) {
    try {
      return knex('users')
        .where('id', userId)
        .andWhere('role', '<>', 'admin')
        .first();

    } catch (err) {
      return false;
    }
  }

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