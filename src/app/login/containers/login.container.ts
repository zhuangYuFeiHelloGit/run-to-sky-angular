import { LoginEntity } from './../login-entity';
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.container.html',
    styleUrls: ['./login.container.scss'],
    // https://blog.csdn.net/KenkoTech/article/details/121634549
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {

    commit(LoginEntity: LoginEntity) {
        
    }
}