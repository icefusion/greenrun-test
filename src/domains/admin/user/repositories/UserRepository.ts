import { knex } from "infra/database/knex";

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
}

export { UserRepository }