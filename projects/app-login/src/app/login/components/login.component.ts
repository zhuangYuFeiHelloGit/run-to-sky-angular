import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DFormSubmitDirective, DValidators, FormLayout } from "ng-devui";
import { FormControl, FormGroup } from '@angular/forms';
import { LoginPresenter } from "../presenter/login.presenter";
import { LoginEntity } from "../login-entity";


@Component({
    selector: "app-login-ui",
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginPresenter]
})
export class LoginComponent implements OnInit {
    layoutDirection: FormLayout = FormLayout.Vertical;

    @Output() commit: EventEmitter<LoginEntity> = new EventEmitter();
    constructor(private presenter: LoginPresenter) {

    }
    ngOnInit(): void {
        this.presenter.commit$.subscribe(login => {
            console.log('--------------------this.presenter.commit$', login);
            
            this.commit.emit(login)
        })
    }

    get loginFormGroup() : FormGroup {
        return this.presenter.loginFormGroup;
    }

    get formRules() {
        return this.presenter.formRules;
    }

    submitForm() {
        this.presenter.login()
    }
}