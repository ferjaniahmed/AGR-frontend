import { Food } from "./food";
import { User } from "./user";

export class Order {
    _id?: string;
    food: Food | string;
    client: User | string;
    Invoice?: string;
    quantity: number;
    isConfirmed? : boolean
  }