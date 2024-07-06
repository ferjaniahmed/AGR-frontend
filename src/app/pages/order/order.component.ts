import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Food } from "src/app/api/food";
import { Order } from "src/app/api/order";
import { FoodService } from "src/app/services/food.service";
import { OrderService } from "src/app/services/order.service";
import {  delete_order_by_food_ID } from "src/app/store/order.actions";
import { selectOrders } from "src/app/store/order.selectors";


@Component({
    templateUrl :"./order.component.html",
    styleUrls :["./order.component.scss"]
})
export class OrderComponent implements OnInit {

    $orders :Order[]
    
    $foods : Food[] = []
    confirm = false
    
    constructor(
        private store :Store , 
        private foodService : FoodService ,
        private orderService : OrderService
        ){
            this.foodService.findAll().subscribe((data) => this.$foods = data)
        }

    
    
    ngOnInit(): void {
        this.store.select(selectOrders).subscribe((data) => this.$orders = data)
        console.log(this.$orders)
        
    }

    confirmOrder(){
        // need cache
        console.log("confirme")
        this.orderService.createManyOrder(this.$orders).subscribe(data => console.log(data))
        this.confirm = !this.confirm
    }

    deleteOrder(id : string){
        this.store.dispatch(delete_order_by_food_ID({foodId : id}))
        this.store.select(selectOrders).subscribe((data) => this.$orders = data)
    }
}