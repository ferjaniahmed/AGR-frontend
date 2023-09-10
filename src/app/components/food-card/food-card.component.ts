import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Food } from "src/app/api/food";

@Component({
  selector: "app-food-card",
  templateUrl: "./food-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCardComponent implements OnInit {
  @Input() foods: Food[];
  page = 1;

  ngOnInit(): void {
    console.log(this.foods);
  }
}
