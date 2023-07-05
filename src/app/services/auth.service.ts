import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponse } from "../api/auth-response";
import { User } from "../api/user";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    try {
      return this.http.post<AuthResponse>("http://localhost:3000/auth/login", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getProfile(token: string): Observable<User> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get<User>("http://localhost:3000/auth/profile", options);
  }
}
