import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Food } from "src/app/api/food";
import { Order } from "src/app/api/order";

@Component({
    templateUrl : "./order.component.html",
    selector :"app-order-card",
    styleUrls : ["./order.component.scss"]
})
export class OrderCardComponnet implements OnInit{
  
    @Input() orders: Order[]
    @Input() foods : Food[]
    @Output() orderDeleted = new EventEmitter()

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    findFoodById(id : string) : Food{
        return this.foods.find((value) => value._id == id)
    }

    deleteOrder(id: string){
        return this.orderDeleted.emit(id)
    }
}