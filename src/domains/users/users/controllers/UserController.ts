import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  private userService = new UserService();

  public async create(request: Request, response: Response): Promise<Response> {
    const { username,  
      password, 
      firstName, 
      lastName, 
      phone, 
      email,
      address, 
      gender, 
      birthdate, 
      countryId, 
      city,
      documentId} = request.body;

    const insertRequest = {
      username,
      password,
      role: 'user',
      firstName,
      lastName,
      phone,
      email,
      address,
      gender,
      birthdate,
      countryId,
      city,
      documentId
    }

    const result = await this.userService.create(insertRequest);

    return response.status(200).json(result);
  }

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