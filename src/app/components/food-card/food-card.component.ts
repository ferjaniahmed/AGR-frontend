import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Food } from "src/app/api/food";


@Component({
  selector: "app-food-card",
  templateUrl: "./food-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCardComponent implements OnInit {

  @Input() foods: Food[];
  page = 1;
  @Output() output = new EventEmitter<string>()

  ngOnInit(): void {
    console.log(this.foods);
  }

  onClick(id :string){
    this.output.emit(id)
  }
}
