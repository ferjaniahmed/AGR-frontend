import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Food } from "../api/food";

@Injectable()
export class FoodService {
  constructor(private http: HttpClient) {}
  token = localStorage.getItem("token");
  findOne(id: string) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.get<Food>(`http://localhost:3000/food/${id}`, options);
    } catch (error) {
      console.log(error);
    }
  }
  findAll() {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.get<Food[]>("http://localhost:3000/food", options);
    } catch (error) {
      console.log(error);
    }
  }

  create(data: Food) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.post<Food>("http://localhost:3000/food", data, options);
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, data: Food) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.patch<Food>(
        `http://localhost:3000/food/${id}`,
        data,
        options
      );
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: string) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.delete<Food>(
        `http://localhost:3000/food/${id}`,
        options
      );
    } catch (error) {
      console.log(error);
    }
  }
}
