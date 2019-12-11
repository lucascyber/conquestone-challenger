import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm : FormGroup
  passwordPattern = /[!@#$%^&*(),.?":{}|<>0-9]/g
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)])
    })

  }

  emailValidationHandler() {
    return this.loginForm.get('email').hasError('required') ? 'Este campo é obrigatório' :
                this.loginForm.get('email').hasError('pattern') ? 'Digite um e-mail válido' : ''
  }

  passwordValidationHandler() {
    return this.loginForm.get('password').hasError('required') ? 'Este campo é obrigatório' :
                this.loginForm.get('password').hasError('minlength') ? 'Tamanho mínimo é de 8 caracteres' : 
                this.loginForm.get('password').hasError('pattern') ? 'Deve conter números ou caracteres especiais' : ''
  }

  onSubmit() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9maWxlIjp7IlBhaW5lbEEiOnRydWUsIlBhaW5lbEIiOmZhbHNlfX0.4Ee96WTCnno0LefvJOwbEOAA0XUNIl2-tSN7MLRu-Lo'
    if(this.loginForm.valid) {
      this.router.navigate(['/home'])
      localStorage.setItem('token', token)
    }
  }

}
