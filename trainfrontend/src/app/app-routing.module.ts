import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/home/welcome-page.component';
import { CustomerLoginComponent } from './pages/login/customer-login.component';
import { RegisterComponent } from './pages/register/register.component';




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
