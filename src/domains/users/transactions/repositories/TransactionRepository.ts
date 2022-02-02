import { knex } from "infra/database/knex";
import { IPlaceTransactionDbRequest } from "../interfaces/IPlaceTransactionDbRequest";

class TransactionRepository {
  public async place(request: IPlaceTransactionDbRequest) {
    return await knex('transactions').insert(request);
  }
}

export { TransactionRepository }