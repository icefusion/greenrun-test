import { knex } from "infra/database/knex";
import { IAuthUser } from '../interfaces/IAuthUser';

class UserRepository {
  public async getUserByUsername(username: string): Promise<IAuthUser>
  {
    const result = await knex('users')
      .where('username', username)
      .select('id', 'username', 'first_name', 'last_name', 'password', 'role')
      .first();

    if (!result) {
      return {
        id: 0,
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        role: ''
      }
    }

    return JSON.parse(JSON.stringify(result));
  }
  
}

export { UserRepository };