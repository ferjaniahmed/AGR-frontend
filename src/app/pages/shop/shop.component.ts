import { IfStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  foods: Food[] = [
    {
      _id: "1",
      name: "pizza1",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 15,
    },
    {
      _id: "2",
      name: "pizza2",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 55,
    },
    {
      _id: "3",
      name: "pizza3",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 35,
    }
  ];
  constructor(private route: ActivatedRoute, private foodService: FoodService) {
    this.typeFood = this.route.snapshot.paramMap.get("food");
  }
  ngOnInit(): void {
    if (this.foods.length == 0) {
      this.foodService.findAll().subscribe((data) => {
        //this.foods=data
        if(this.foods.length==0){
          data.forEach((value) => {
            this.foods.push(value);
          });
        }
      });
    }
    console.log(this.foods)
    console.log(this.typeFood)
  }

  addOrder(id:string) {
    console.log(id);
  }
}
/*{
      _id: "1",
      name: "pizza1",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 15,
    },
    {
      _id: "2",
      name: "pizza2",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 55,
    },
    {
      _id: "3",
      name: "pizza3",
      description: "aaaaaaaaaaaaaaaaaaa",
      type: FoodType.PIZZA,
      price: 35,
    },*/