import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:"",
    component:WelcomePageComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:CustomerLoginComponent,
    pathMatch:'full'
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
