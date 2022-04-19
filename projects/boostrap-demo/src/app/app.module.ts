import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './login-component/login.component';
import { RegisterComponent } from './register.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    RegisterComponent,
    NewcompComponent,
    OnewaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Login]
})
export class AppModule { }
