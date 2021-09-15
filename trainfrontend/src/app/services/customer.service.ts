import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  //adding customer
  public addCustomer(customer: any) {
    return this.http.post(`${baseUrl}/customer/`, customer)
  }

  
}
