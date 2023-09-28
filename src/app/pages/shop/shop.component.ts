import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Food } from "src/app/api/food";
import { FoodType } from "src/app/api/food-type";
import { FoodCardComponent } from "src/app/components/food-card/food-card.component";
import { FoodService } from "src/app/services/food.service";

@Component({
  templateUrl: "./shop.component.html",
  styleUrls: ["shop.component.scss"],
  providers: [FoodCardComponent],
})
export class ShopComponent implements OnInit {
  typeFood = "";
  order :any[]=[]
  foods: Food[] = [];
  constructor(private route: ActivatedRoute, private foodService: FoodService,private router:Router) {
    this.typeFood = this.route.snapshot.paramMap.get("food");
  }
  
  ngOnInit(): void {
    if (this.foods.length == 0) {
      this.foodService.findAll().subscribe((data) => {
        if(this.foods.length==0){
          data.forEach((value) => {
            this.foods.push(value);
          });
        }
        if(this.typeFood!= null){
          this.foods = this.filter(this.typeFood)
        }
      });
    }
    console.log(this.foods)
  }

  filter(type: string){
    return this.foods.filter((value)=> value.type==type)
  }
} 