import { format } from "date-fns";
import { hashSync } from 'bcryptjs';
import { IInsertRequest } from "../interfaces/IInsertRequest";
import { IUpdateRequest } from "../interfaces/IUpdateRequest";
import { IUpdateUserDbRequest } from "../interfaces/IUpdateUserDbRequest";
import { UserRepository } from "../repositories/UserRepository";
import { IInsertUserDbRequest } from '../interfaces/IInsertUserDbRequest';


class UserService {
  private userRepository = new UserRepository();

  public async create(request: IInsertRequest) {
    const preparedData = this.toInsertDataDbRequest(request);

    const response = await this.userRepository.create(preparedData);

    if (!response) {
      return 'User Not Created';
    }

    return `User Created: ${response}`;
  }

  public async updateUserData(id: number, request: IUpdateRequest) {
    const preparedData = this.toUpdateDataDbRequest(request);

    return await this.userRepository.updateUserData(id, preparedData);
  }

  private toInsertDataDbRequest(data: IInsertRequest): IInsertUserDbRequest {
    return {
      username: data.username,
      password: hashSync(data.password, 10),
      role: data.role,
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      address: data.address,
      gender: data.gender,
      birthdate: data.birthdate,
      country_id: data.countryId,
      city: data.city,
      document_id: data.documentId,
      user_state: 'active',
      created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
  }

  private toUpdateDataDbRequest(data: IUpdateRequest): IUpdateUserDbRequest {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      birthdate: data.birthdate,
      country_id: data.countryId,
      city: data.city,
      updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
  }
}

export { UserService };