import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { HeaderComponent } from "app/core/header/header.component";
import { AppRoutingModule } from "app/app-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ]
})
export class CoreModule{

}