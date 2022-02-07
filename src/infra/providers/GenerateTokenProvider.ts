import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { ITokenRequest } from '../../domains/auth/users/interfaces/ITokenRequest';

class GenerateTokenProvider {
  public async execute({ id, username, role }: ITokenRequest): Promise<string> {
    const token = jwt.sign({ id, username, role}, process.env.JWT_SECRET , {
      subject: id.toString(),
      expiresIn: process.env.JWT_ACCESS_EXPIRATION_DAYS,
    });

    return token;
  }
}

export { GenerateTokenProvider };