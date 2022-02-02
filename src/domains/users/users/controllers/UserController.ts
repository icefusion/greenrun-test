import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  private userService = new UserService();

  public async updateUserData(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { firstName, lastName, phone, address, gender, birthdate, countryId, city } = request.body;

    const updateRequest = {
      firstName,
      lastName,
      phone,
      address,
      gender,
      birthdate,
      countryId,
      city,
    }

    const result = await this.userService.updateUserData(id, updateRequest);

    return response.status(200).json(result);
  }
}

export { UserController };