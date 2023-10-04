import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/api/order";
import { ShareService } from "src/app/shares/shares.service";


@Component({
    templateUrl :"./order.component.html",
    styleUrls :["./order.component.scss"]
})
export class OrderComponent implements OnInit{

    orders : Order[] =[]
    
    constructor(private shareService : ShareService ){
    }
    
    
    ngOnInit(): void {
        this.orders = this.shareService.orders
        console.log(this.orders)
    }

    confirmOrder(){
        // need cache
        this.shareService.createManyOrder(this.orders).subscribe(data => console.log(data))
    }
}