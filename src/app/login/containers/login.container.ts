import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.container.html',
    // https://blog.csdn.net/KenkoTech/article/details/121634549
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {

}