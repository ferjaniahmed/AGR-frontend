import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Food } from "src/app/api/food";
import { FoodService } from "src/app/services/food.service";


@Component({
    templateUrl:"./product-page.component.html"
})
export class ProductPageComponent implements OnInit{

    id : string
    food : Food
    

    constructor(private activatedRoute : ActivatedRoute,private foodService : FoodService){
        this.id = this.activatedRoute.snapshot.paramMap.get("productId") 
    }
    ngOnInit(): void {
       console.log(this.id)
       this.foodService.findOne(this.id).subscribe((data) => {this.food = data})
       console.log(this.food)
    }

}