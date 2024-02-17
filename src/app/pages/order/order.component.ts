import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Food } from "src/app/api/food";
import { Order } from "src/app/api/order";
import { FoodService } from "src/app/services/food.service";
import { ShareService } from "src/app/shares/shares.service";
import { delete_order, delete_order_by_food_ID } from "src/app/store/order.actions";
import { selectOrders } from "src/app/store/order.selectors";


@Component({
    templateUrl :"./order.component.html",
    styleUrls :["./order.component.scss"]
})
export class OrderComponent implements OnInit , OnDestroy{

    $orders :Order[]
    
    $foods : Food[] = []

    
    constructor(
        private shareService : ShareService , 
        private store :Store , 
        private foodService : FoodService ){
                this.foodService.findAll().subscribe((data) => this.$foods = data)
            }
    ngOnDestroy(): void {
        
    }
    
    
    ngOnInit(): void {
        this.store.select(selectOrders).subscribe((data) => this.$orders = data)
        console.log(this.$orders)
        
    }

    confirmOrder(){
        // need cache
        console.log("confirme")
        //this.shareService.createManyOrder(this.$orders).subscribe(data => console.log(data))
    }

    deleteOrder(id : string){
        this.store.dispatch(delete_order_by_food_ID({foodId : id}))
        this.store.select(selectOrders).subscribe((data) => this.$orders = data)
    }
}