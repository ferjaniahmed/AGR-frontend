import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Food } from "src/app/api/food";


@Component({
  selector: "app-food-card",
  templateUrl: "./food-card.component.html",
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCardComponent implements OnInit {

  @Input() foods: Food[];
  //page = 1;

  constructor(private router : Router){}

  ngOnInit(): void {
  }

  onClick(id : string){
    this.router.navigate(["app/product-page",{ productId : id}])
  }
}
