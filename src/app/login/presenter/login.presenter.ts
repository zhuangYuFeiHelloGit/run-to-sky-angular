import { OnDestroy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { LoginEntity } from '../login-entity';
import { DValidateRules } from "ng-devui";
import { LoginService } from '../login-service';
@Component({
    template: ''
})
export class LoginPresenter implements OnDestroy {

    constructor(private loginService: LoginService) {
        console.log('loginService', loginService);
        
    }

    ngOnDestroy(): void {
        this.commit.complete();
    }

    /**
     * Subject 是一个支持多播的 Observable
     */
    private commit: Subject<LoginEntity> = new Subject();
    /**
     * 将 Subject 转换成 Observable
     */
    commit$: Observable<LoginEntity> = this.commit.asObservable();

    /**
     * 用于子组件的Form表单
     */
    loginFormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })

    formRules: { [key: string]: DValidateRules } = {
        rule: { message: 'The form verification failed, please check.' },
        usernameRules: {
            validators: [
                { required: true }
            ]
        },
        passwordRules: {
            validators: [
                { required: true }
            ]
        }
    };

    public login(): void {
        console.log('----登录成功----', this.loginFormGroup);
        let login:LoginEntity = {
            username: this.loginFormGroup.get('username')?.value,
            password: this.loginFormGroup.get('password')?.value
        }
        this.commit.next(login)
        this.loginService.loginPost(login)
    }

}