import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from '../../login/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  userLogin: Login

  ngOnInit() {
    if (this.auth.doLogin()) {
      this.userLogin = this.auth.doLogin()
    }
  }

  doExit() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
