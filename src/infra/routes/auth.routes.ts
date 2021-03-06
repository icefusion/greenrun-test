
import { AuthController } from 'domains/auth/users/controllers/AuthController';
import { Router } from 'express';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/login', async (request, response) => {
  return authController.login(request, response);
});


export { authRouter };