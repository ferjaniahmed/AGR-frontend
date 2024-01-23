import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Order } from "src/app/api/order";
import { ShareService } from "src/app/shares/shares.service";
import { selectOrders } from "src/app/store/order.selectors";


@Component({
    templateUrl :"./order.component.html",
    styleUrls :["./order.component.scss"]
})
export class OrderComponent implements OnInit{

    orders :Observable<Order[]>
    
    constructor(private shareService : ShareService , private store :Store ){
    }
    
    
    ngOnInit(): void {
        this.orders = this.store.select(selectOrders)
    }

    confirmOrder(){
        // need cache
        console.log("confirme")
        //this.shareService.createManyOrder(this.orders).subscribe(data => console.log(data))
    }
}