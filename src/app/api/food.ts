import { FoodType } from "./food-type";

export class Food {
  _id?: string;
  description: string;
  name: string;
  price: number;
  image?: string;
  type: FoodType;
  createdAt?:Date;
  updatedAt?:Date
}
