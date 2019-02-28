import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routerModule } from './routing.module';
import { HomeComponent } from './Home/home.component';
import { UsersComponent } from './Home/Users/users.component';
import { ServicesComponent } from './Home/Services/services.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServicesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
