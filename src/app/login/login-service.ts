import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError } from "rxjs";
import { BaseResponse } from "../base-response";
import { LoginEntity } from "./login-entity";

@Injectable()
export class LoginService {
    // headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    
    constructor(private client: HttpClient) {
    }

    loginPost(login: LoginEntity) {
        console.log('----loginPost----');

        let url = 'http://localhost:3000/user/login'
        this.client.post<LoginEntity>(url, login).pipe(
            tap((h: LoginEntity) => {
                console.log(h);
            })
        )
    }
}