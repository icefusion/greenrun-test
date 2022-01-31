import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { ITokenRequest } from '../../domains/users/interfaces/ITokenRequest';

class GenerateTokenProvider {
  public async execute({ userId, userUsername }: ITokenRequest): Promise<string> {
    const token = jwt.sign({ userUsername }, process.env.JWT_SECRET , {
      subject: userId.toString(),
      expiresIn: process.env.JWT_ACCESS_EXPIRATION_DAYS,
    });

    return token;
  }
}

export { GenerateTokenProvider };