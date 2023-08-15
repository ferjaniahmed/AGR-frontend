import { NgModule } from "@angular/core";
import { ShopComponent } from "../pages/shop/shop.component";
import { ComponentsModule } from "../components/components.module";


@NgModule({
    declarations: [ShopComponent],
    exports: [ShopComponent],
    imports: [ComponentsModule]
})
export class ShareModule{}