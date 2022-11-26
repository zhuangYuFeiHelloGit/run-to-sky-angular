import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseResponse } from "../base-response";
import { LoginEntity } from "./login-entity";

export class LoginService {
    constructor(private client: HttpClient) {

    }

    loginPost(login: LoginEntity): Observable<BaseResponse<LoginEntity>> {
        return this.client.post<LoginEntity>().pipe(
            tap((h: LoginEntity) => this.log(`added hero w/ id=${h.id}`)),
        catchError(this.handleError<Hero>('addHero'))
        )
    }
}