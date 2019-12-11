import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Login } from '../../login/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public doLogin(): Login {
    let token = localStorage.getItem('token')
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  public handleLogin() {
    this.router.navigate(['/login'])
  }
}
