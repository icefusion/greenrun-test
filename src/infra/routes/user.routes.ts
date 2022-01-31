
import { UserController } from 'domains/users/controllers/UserController';
import { Router } from 'express';

import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', async (request, response) => {
  return userController.create(request, response);
});

userRouter.get('/', AuthMiddleware, async (request, response) => {
  return userController.list(request, response);
});

userRouter.post('/login', AuthMiddleware, async (request, response) => {
  return userController.getUserById(request, response);
});

userRouter.put('/:id', AuthMiddleware, async (request, response) => {
  return userController.update(request, response);
});

userRouter.delete('/:id', AuthMiddleware, async (request, response) => {
  return userController.delete(request, response);
});


export { userRouter };
