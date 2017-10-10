import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, SignUp } from "app/auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private _authService: AuthService) { }

  onSignup(form: NgForm) {
    let params = {};
    ['username', 'firstname', 'lastname', 'email', 'password', 'project_license']
      .forEach((key) => {
        params[key] = form.value[key];
      });
      params['authtype'] = 'plain';
    this._authService.signup(params).subscribe(function (resp) {
      this.router.navigate(['signin']);
    });
  }
}
