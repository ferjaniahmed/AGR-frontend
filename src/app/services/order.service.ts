import { Injectable } from "@angular/core";
import { Order } from "../api/order";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";

const URL = "http://localhost:3000"

@Injectable()
export class OrederService{
    orders : Order[] =[]  ;
    private token = localStorage.getItem("token");
    constructor(private _http : HttpClient){
        this.orders = JSON.parse(localStorage.getItem("orders")) as Order[]
    }
    ngOnInit(): void {
    }

    createManyOrder(data : Order[]):Observable<Order[]>{
        const options = {
            headers: new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
            }),
          };
        return this._http.post<Order[]>(`${URL}/order`,data,options)
    }
}