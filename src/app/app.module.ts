import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MockServerModule, RouteInitializer } from "ng2-mock-server/src";

import { AppComponent } from './app.component';
import { CoreModule } from "app/core/core.module";
import { SigninComponent } from "app/auth/signin/signin.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { AuthGuardService } from "app/auth/auth-guard.service";
import { MockRouteInitializer } from "app/auth/mockroute-initializer.service";
import { AuthService } from "app/auth/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MockServerModule,
    CoreModule
  ],
  providers: [AuthGuardService, AuthService,
      { provide: RouteInitializer, useClass: MockRouteInitializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
