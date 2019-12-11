import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeGuard } from './home/home.guard';
import { AuthService } from './core/services/auth.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HomeGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
