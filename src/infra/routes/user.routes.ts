import { UserController } from 'domains/users/users/controllers/UserController';
import { Router } from 'express';

import { UserAuthMiddleware } from '../middlewares/UserAuthMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', async (request, response) => {
  return userController.create(request, response);
});

userRouter.put('/:id', UserAuthMiddleware, async (request, response) => {
  return userController.updateUserData(request, response);
});

export { userRouter };