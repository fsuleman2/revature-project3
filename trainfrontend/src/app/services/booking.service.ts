import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private https:HttpClient) { }

  public getTrainById(tid:any){
    return this.https.get(`http://localhost:9848/train/trainbyid/`+ tid);
  }
  public checkAvailableSeat(seattype:any){
    return this.https.get(`http://localhost:9848/reserve/checkseats/`+seattype+`/`+localStorage.getItem("tid"));
  }

}

