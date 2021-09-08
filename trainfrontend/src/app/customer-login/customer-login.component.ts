import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//show hide div variables
userlogin = true;
userregister = false;
//Buttons clicks functionalities 
user_register()
{
  this.userlogin = false;
  this.userregister = true;
}
user_login()
{
  this.userlogin = true;
  this.userregister = false;
}
}
