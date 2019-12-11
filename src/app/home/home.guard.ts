import { CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class HomeGuard implements CanLoad {
  constructor(private auth: AuthService) {}

  canLoad(route: Route) : boolean {
    if(this.auth.doLogin()) {
      return true
    } else {
      this.auth.handleLogin()
      return false
    }
  }
}