import { Role } from "./role";

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  dateOfBirth: Date;
  address: string;
  password?: string;
  role: Role;
  phone: string;
}
