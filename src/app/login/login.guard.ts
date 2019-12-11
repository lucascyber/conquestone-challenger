import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router) { }

  canLoad(route: Route): boolean {

    if (this.auth.doLogin()) {
      this.router.navigate(['/home'])
    }

    return true
  }
}