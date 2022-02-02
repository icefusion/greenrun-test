export interface IPlaceTransactionDbRequest {
  user_id: number;
  amount: number;
  category: string;
  status: string;
  created_at?: string;
  updated_at?: string;
  deleted?: boolean; 
  deleted_at?: string; 
  user_bet_id?: number;
}