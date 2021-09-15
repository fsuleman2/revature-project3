import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  constructor( private service:BookingService) { }

  ngOnInit(): void {
  }
  public booking = {
    seattype: '',
    pname: '',
    page: 0,
    pgender: '',
    disable: ''

  }

  flag=false;
  msg:any='';


    checkavailabilty(){

      console.log("button clicked ok")
        this.service.checkAvailableSeat(this.booking.seattype).subscribe(
          (Response:any)=>{
            console.log(Response)
            this.flag=Response;
          },
          (err:any)=>{

          }
        );
    }
    price:any='';
    finalprice:number=0;
    checkPrice(){
      this.price=localStorage.getItem("dist");
      this.finalprice=this.price*2;
    }
  }