import { format } from "date-fns";
import { IUpdateRequest } from "../interfaces/IUpdateRequest";
import { IUpdateUserDbRequest } from "../interfaces/IUpdateUserDbRequest";
import { UserRepository } from "../repositories/UserRepository";


class UserService {
  private userRepository = new UserRepository();

  public async updateUserData(id: number, request: IUpdateRequest) {
    const preparedData = this.toUpdateDataDbRequest(request);

    return await this.userRepository.updateUserData(id, preparedData);
  }

  private toUpdateDataDbRequest(data: IUpdateRequest): IUpdateUserDbRequest {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      birth_date: data.birthdate,
      country_id: data.countryId,
      city: data.city,
      updated_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
  }
}

export { UserService };