
import { BetsController } from 'domains/admin/bets/controllers/BetsController';
import { Router } from 'express';

import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const betsRouter = Router();

const betsController = new BetsController();

betsRouter.get('/', async (request, response) => {
  return betsController.getBets(request, response);
});

betsRouter.get('/event/:event', async (request, response) => {
  return betsController.getBetsByEvent(request, response);
});

betsRouter.get('/sport/:sport', async (request, response) => {
  return betsController.getBetsBySport(request, response);
});


export { betsRouter };