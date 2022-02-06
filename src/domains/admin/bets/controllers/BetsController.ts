import { Request, Response } from 'express';
import { BetsService } from '../services/BetsService';

class BetsController {
  private betsService = new BetsService();

  public async getBets(request: Request, response: Response): Promise<Response> {
    const result = await this.betsService.getBets();

    return response.status(200).json(result);
  }

  public async getBetsByEvent(request: Request, response: Response): Promise<Response> {
    const { event } = request.params;
  
    const result = await this.betsService.getBetsByEvent(event);

    return response.status(200).json(result);
  }

  public async getBetsBySport(request: Request, response: Response): Promise<Response> {
    const { sport } = request.params;
  
    const result = await this.betsService.getBetsBySport(sport);

    return response.status(200).json(result);
  }

  public async updateBetsStatus(request: Request, response: Response): Promise<Response> {
    const { id, status } = request.params;
  
    const result = await this.betsService.updateBetsStatus(id, status);

    return response.status(200).json({status: result});
  }
}

export { BetsController };