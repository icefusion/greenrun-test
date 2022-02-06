import { BetsRepository } from "../repositories/BetsRepository";

class BetsService {
  private betsRepository = new BetsRepository();

  public async getBets(): Promise<any> {
    return await this.betsRepository.getBets();  
  }

  public async getBetsByEvent(eventId: number): Promise<any> {
    return await this.betsRepository.getBetsByEvent(eventId);  
  }

  public async getBetsBySport(sport: string): Promise<any> {
    return await this.betsRepository.getBetsBySport(sport);  
  }
}

export { BetsService };