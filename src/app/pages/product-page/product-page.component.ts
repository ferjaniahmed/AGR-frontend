import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Food } from "src/app/api/food";
import { Order } from "src/app/api/order";
import { User } from "src/app/api/user";
import { FoodService } from "src/app/services/food.service";
import { ShareService } from "src/app/shares/shares.service";
import { create_order } from "src/app/store/order.actions";


@Component({
    templateUrl:"./product-page.component.html"
})
export class ProductPageComponent implements OnInit{

    id : string
    food : Food
    currentUser : User
    quantity : number = 1

    constructor(
        private activatedRoute : ActivatedRoute,
        private foodService : FoodService, 
        private shareService  :ShareService,
        private store : Store
        ){
        this.id = this.activatedRoute.snapshot.paramMap.get("productId") 
        this.currentUser = JSON.parse(localStorage.getItem("user")) as User
    }
    ngOnInit(): void {
       this.foodService.findOne(this.id).subscribe((data) => {this.food = data})
      
    }

    addOrder(food : Food){
        const newOrder : Order = {
            food: food,
            client: this.currentUser._id ,
            quantity: Number(this.quantity)
        }
        
        console.log(newOrder)
        if(this.quantity){
           this.shareService.addOrder(newOrder)
           this.store.dispatch(create_order({order : newOrder}))
        }
        
    }
}