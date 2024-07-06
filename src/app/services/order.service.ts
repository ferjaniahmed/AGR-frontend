import { Injectable } from "@angular/core";
import { Order } from "../api/order";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class OrderService{
    orders : Order[] =[]  ;
    token : string 
    
    constructor(private _http : HttpClient){
        this.token  = localStorage.getItem("token")
    }

    createManyOrder(data : Order[]){
        const options = {
            headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            }),
          };
        return this._http.post("http://localhost:3000/order/create-many",data,options)
    }
}