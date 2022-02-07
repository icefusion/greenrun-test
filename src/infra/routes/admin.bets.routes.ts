
import { BetsController } from 'domains/admin/bets/controllers/BetsController';
import { Router } from 'express';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const adminBetsRouter = Router();

const betsController = new BetsController();

adminBetsRouter.get('/', AdminAuthMiddleware, async (request, response) => {
  return betsController.getBets(request, response);
});

adminBetsRouter.get('/event/:event', AdminAuthMiddleware, async (request, response) => {
  return betsController.getBetsByEvent(request, response);
});

adminBetsRouter.get('/sport/:sport', AdminAuthMiddleware, async (request, response) => {
  return betsController.getBetsBySport(request, response);
});

adminBetsRouter.patch('/:id/status/:status', async (request, response) => {
  return betsController.updateBetsStatus(request, response);
});

adminBetsRouter.patch('/results/event/:event', async (request, response) => {
  return betsController.setResultsByEvent(request, response);
});


export { adminBetsRouter };