import { UserController } from 'domains/users/users/controllers/UserController';
import { Router } from 'express';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';
import { UserAuthMiddleware } from '../middlewares/UserAuthMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.put('/:id', UserAuthMiddleware, async (request, response) => {
  return userController.updateUserData(request, response);
});

// userRouter.post('/', async (request, response) => {
//   return userController.create(request, response);
// });

// userRouter.get('/', AuthMiddleware, async (request, response) => {
//   return userController.list(request, response);
// });

// userRouter.post('/login', AuthMiddleware, async (request, response) => {
//   return userController.getUserById(request, response);
// });

// userRouter.delete('/:id', AuthMiddleware, async (request, response) => {
//   return userController.delete(request, response);
// });


export { userRouter };
