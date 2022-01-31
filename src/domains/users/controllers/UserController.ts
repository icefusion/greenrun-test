import { Request, Response } from 'express';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastName,
      type,
      document,
      email,
      phoneNumber,
      birthdayDate,
      password,
      address,
    } = request.body;

    // const user = await this.createUserService.execute({
    //   name,
    //   lastName,
    //   type,
    //   document,
    //   email,
    //   phoneNumber,
    //   birthdayDate,
    //   password,
    //   address,
    // });
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastName,
      type,
      document,
      email,
      phoneNumber,
      birthdayDate,
      password,
      address,
    } = request.body;

    // const user = await this.createUserService.execute({
    //   name,
    //   lastName,
    //   type,
    //   document,
    //   email,
    //   phoneNumber,
    //   birthdayDate,
    //   password,
    //   address,
    // });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastName,
      type,
      document,
      email,
      phoneNumber,
      birthdayDate,
      password,
      address,
    } = request.body;

    // const user = await this.createUserService.execute({
    //   name,
    //   lastName,
    //   type,
    //   document,
    //   email,
    //   phoneNumber,
    //   birthdayDate,
    //   password,
    //   address,
    // });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastName,
      type,
      document,
      email,
      phoneNumber,
      birthdayDate,
      password,
      address,
    } = request.body;

    // const user = await this.createUserService.execute({
    //   name,
    //   lastName,
    //   type,
    //   document,
    //   email,
    //   phoneNumber,
    //   birthdayDate,
    //   password,
    //   address,
    // });
  }
}

export { UserController }