import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "app/core/home/home.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthGuardService } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}