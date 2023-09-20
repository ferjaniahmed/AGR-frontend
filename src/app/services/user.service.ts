import { Injectable } from "@angular/core";
import { User } from "../api/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

  token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}
  
  create(data: User): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.post<any>(`http://localhost:3000/user`, data , options);
    } catch (error) {
      console.log(error);
    }
  }
  getAll(): Observable<User[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.get<User[]>(`http://localhost:3000/user`,options);
    } catch (error) {
      console.log(error);
    }
  }
  getById(id: string) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.get<User>(`http://localhost:3000/user/${id}`,options);
    } catch (error) {
      console.log(error);
    }
  }
  delete(id: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    try {
      return this.http.get<User>(`http://localhost:3000/user/${id}`,options);
    } catch (error) {
      console.log(error);
    }
  }
  update(id : string, data : User){
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.patch<User>(`http://localhost:3000/user/${id}`,data,options);
  }
}
