import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  private userService = new UserService();

  public async updateStatusUser(request: Request, response: Response): Promise<Response> {
    const { id, status } = request.params;

    const result = await this.userService.updateStatusUser(id, status);

    return response.status(200).json({status: result});
  }
}

export { UserController };