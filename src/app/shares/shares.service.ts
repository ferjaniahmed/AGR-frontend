import { Injectable, OnInit } from "@angular/core";
import { Order } from "../api/order";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ShareService implements OnInit{
    orders : Order[] =[]  ;
    private token = localStorage.getItem("token");
    constructor(private _http : HttpClient){
        this.orders = JSON.parse(localStorage.getItem("orders")) as Order[]
    }
    ngOnInit(): void {
        console.log(this.orders);
    }

    createManyOrder(data : Order[]):Observable<Order[]>{
        const options = {
            headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            }),
          };
        return this._http.post<Order[]>("http://localhost:3000/auth/login",data,options)
    } 

    addOrder(order : Order ) :void{
        this.orders.push(order)
        localStorage.setItem("orders" , JSON.stringify(this.orders))
    }
    
}