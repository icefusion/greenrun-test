
import { UserController } from 'domains/admin/user/controllers/UserController';
import { Router } from 'express';

const adminUserRouter = Router();

const userController = new UserController();

adminUserRouter.patch('/:id/status/:status', async (request, response) => {
  return userController.updateStatusUser(request, response);
});

export { adminUserRouter };
