import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from './home/home.guard';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadChildren: () => 
      import(`./login/login.module`).then(m => m.LoginModule),
      canLoad: [LoginGuard] 
  },
  {
    path: 'home', 
    loadChildren: () => 
      import(`./home/home.module`).then(m => m.HomeModule),
      canLoad: [HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
