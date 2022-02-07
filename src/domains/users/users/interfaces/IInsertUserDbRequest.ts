export interface IInsertUserDbRequest {
  username: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  gender: string;
  birthdate: string;
  country_id: number;
  city: string;
  document_id: string;
  user_state: string;
  created_at: string;
}