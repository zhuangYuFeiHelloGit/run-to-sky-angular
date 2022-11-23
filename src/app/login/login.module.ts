import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from "./components/login.component";
import { LoginContainerComponent } from "./containers/login.container";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
        LoginContainerComponent
    ],
    imports: [
        MatCardModule,
        LoginRoutingModule
    ]
})
export class LoginModule {

}