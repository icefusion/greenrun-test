
import { compare } from 'bcryptjs';
import { GenerateTokenProvider } from 'infra/providers/GenerateTokenProvider';
import AppError from '../../../../infra/errors/AppError';
import { UserRepository } from '../repositories/UserRepository';

class AuthService {
  private userRepository = new UserRepository();
  private generateTokenProvider = new GenerateTokenProvider();

  public async authenticate(username: string, password: string): Promise<any> {
    
    const user = await this.userRepository.getUserByUsername(username);

    if (user.username === '') {
      throw new AppError('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination');
    }

    const token = await this.generateTokenProvider.execute({
      userId: user.id,
      userUsername: user.username,
    });

    const authenticatedUser = {
      username: user.username,
      firstname: user.first_name,
      lastname: user.last_name
    }

    return {
      user: authenticatedUser, 
      token
    };
  }
  
}

export { AuthService };