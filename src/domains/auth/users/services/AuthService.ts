
import { compare } from 'bcryptjs';
import { GenerateTokenProvider } from 'infra/providers/GenerateTokenProvider';
import AppError from '../../../../infra/errors/AppError';
import { UserRepository } from '../repositories/UserRepository';

class AuthService {
  private userRepository = new UserRepository();
  private generateTokenProvider = new GenerateTokenProvider();

  public async authenticate(username: string, password: string): Promise<any> {
    try {
      const user = await this.userRepository.getUserByUsername(username);

      if (user.username === '') {
        throw new AppError('Incorrect email/password combination');
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        throw new AppError('Incorrect email/password combination');
      }

      const token = await this.generateTokenProvider.execute({
        id: user.id,
        username: user.username,
        role: user.role
      });

      const authenticatedUser = {
        username: user.username,
        firstname: user.first_name,
        lastname: user.last_name,
        role: user.role
      }

      return {
        user: authenticatedUser, 
        token
      };
    } catch (err) {
      return {
        user: '',
        token: ''
      }
    }
  }
  
}

export { AuthService };