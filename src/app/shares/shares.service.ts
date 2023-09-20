import { Injectable, OnInit } from "@angular/core";
import { Order } from "../api/order";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ShareService {
    orders : Order[] =[]
    token = localStorage.getItem("token");
    constructor(private _http : HttpClient){}

    createManyOrder(data : Order[]):Observable<Order[]>{
        const options = {
            headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            }),
          };
        return this._http.post<Order[]>("http://localhost:3000/auth/login",data,options)
    } 
}