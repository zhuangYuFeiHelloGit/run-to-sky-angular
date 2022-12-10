import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { LoginComponent } from "./components/login.component";
import { LoginContainerComponent } from "./containers/login.container";
import { LoginRoutingModule } from "./login-routing.module";

import { DevUIModule } from 'ng-devui';
import { LoginService } from "./login-service";
@NgModule({
    declarations: [
        LoginComponent,
        LoginContainerComponent
    ],
    imports: [
        LoginRoutingModule,
        DevUIModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {

}