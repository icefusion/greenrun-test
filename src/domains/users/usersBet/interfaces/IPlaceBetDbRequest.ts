export interface IPlaceBetDbRequest {
  user_id: number;
  bet_id: number;
  odd: number;
  amount: number;
  state: string;
  deleted: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}