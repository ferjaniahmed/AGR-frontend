import { Role } from "./role";

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  dateOfBirth: Date;
  address: string;
  role: Role;
  password ? : string
  phone: string;
}
