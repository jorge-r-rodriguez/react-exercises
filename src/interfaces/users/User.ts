export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export interface CreateUser extends User {
  color?: string;
}
