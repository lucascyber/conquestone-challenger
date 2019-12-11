import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from '../../login/login.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  userLogin: Login

  ngOnInit(){
    if(this.auth.doLogin()) {
      this.userLogin = this.auth.doLogin()
    }
  }

}
