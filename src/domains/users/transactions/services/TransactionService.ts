import { format } from "date-fns";
import { IPlaceRequest } from "../interfaces/IPlaceRequest";
import { TransactionRepository } from "../repositories/TransactionRepository";


class TransactionService {
  private transactionRepository = new TransactionRepository();
  
  public async place(request: IPlaceRequest) {
    const actualDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); 

    const data = {
      user_id: request.userId,
      amount: request.amount,
      category: request.category,
      status: 'active',
      created_at: actualDate,
      updated_at: actualDate
    }

    return await this.transactionRepository.place(data);

  }
}

export { TransactionService };