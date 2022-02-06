import { UserRepository } from "../repositories/UserRepository";


class UserService {
  private userRepository = new UserRepository();

  public async updateStatusUser(id: number, status: string) {
    const user = await this.userRepository.getUserById(id);
    
    if (!user) {
      return 'Not allowed';
    }

    const result = await this.userRepository.updateStatusUser(id, status);

    if (!result) {
      return 'Not updated';
    }
  
    return 'Successfully updated';
  }
}

export { UserService };