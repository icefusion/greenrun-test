import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

class AuthController {
  private authService = new AuthService();

  public async login(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const { user, token, refreshToken } =
      await this.authService.authenticate(
        username,
        password
      );

    return response.status(200).json({ user, token, refreshToken });
  }
}

export { AuthController };