import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private https:HttpClient) { }

  public getTrainById(tid:any){
    return this.https.get(`${baseUrl}/train/trainbyid/`+ tid);
  }
  public checkAvailableSeat(coachType:any){
    return this.https.get(`${baseUrl}/reserve/checkseats/`+coachType+`/`+localStorage.getItem("tid"));
  }

  public addBooking(booking:any){
    return this.https.post(`${baseUrl}/reserve/add`,booking);
  }

  public getCustomerIdByUsername(username:any){
    return this.https.get(`${baseUrl}/customer/`+ username);
  }

  public getReservationDetails(tid:any, userid:any,status:any){
    return this.https.get(`${baseUrl}/reserve/details/`+ tid +`/` + userid + `/`+status);
  }   

}

