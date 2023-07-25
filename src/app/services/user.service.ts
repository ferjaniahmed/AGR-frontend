import { Injectable } from "@angular/core";
import { User } from "../api/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  create(data: User): Observable<any> {
    try {
      return this.http.post<any>(`http://localhost:3000/user`, data);
    } catch (error) {
      console.log(error);
    }
  }
  getAll(): Observable<User[]> {
    try {
      return this.http.get<User[]>(`http://localhost:3000/user`);
    } catch (error) {
      console.log(error);
    }
  }
  getById(id: string) {
    try {
      return this.http.get<User>(`http://localhost:3000/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
  delete(id: string): Observable<any> {
    try {
      return this.http.get<User>(`http://localhost:3000/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
