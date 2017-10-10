import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SignIn } from "app/auth/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private _authService: AuthService, private router: Router) {}

  onSignin(username, password){
    //Enahanced Object Literals using ES6
    let params: SignIn= {
      username,
      password,
      authtype: 'plain'
    }
    this._authService.signin(params).subscribe((resp) => {
      localStorage.setItem('token', resp.token);
      this.router.navigate(['home']);
    });
  }
}
