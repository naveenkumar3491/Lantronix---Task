import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface SignIn {
    username: string,
    password: string,
    authtype: string
}

export interface SignUp {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    authtype: string,
    project_license: string
}

@Injectable()
export class AuthService {
    constructor(private _http: Http) { }

    signin(params: SignIn): Observable<any>{      
        return this._http.post("/user/login", params).map((res) => {
            return res.json();
        })
    }

    signup(params): Observable<any>{     
        return this._http.post("/user/register", params).map((res) => {
            return res.json();
        })
    }

}