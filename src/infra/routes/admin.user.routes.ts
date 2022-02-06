
import { UserController } from 'domains/admin/user/controllers/UserController';
import { Router } from 'express';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const adminUserRouter = Router();

const userController = new UserController();

adminUserRouter.patch('/:id/status/:status', AdminAuthMiddleware, async (request, response) => {
  return userController.updateStatusUser(request, response);
});

adminUserRouter.put('/:id', AdminAuthMiddleware, async (request, response) => {
  return userController.updateUserData(request, response);
});

export { adminUserRouter };
