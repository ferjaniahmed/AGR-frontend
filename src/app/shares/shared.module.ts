import { NgModule } from "@angular/core";
import { ShopComponent } from "../pages/shop/shop.component";
import { ComponentsModule } from "../components/components.module";
import { OrderComponent } from "../pages/order/order.component";
import { ProductPageComponent } from "../pages/product-page/product-page.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [ShopComponent , OrderComponent,ProductPageComponent],
    exports: [ShopComponent, OrderComponent],
    imports: [ComponentsModule, FormsModule]
})
export class ShareModule{}