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
    bookingId:'',
    source:localStorage.getItem("start"),
    destination:localStorage.getItem("end"),
    travelDate:localStorage.getItem("date"),
    coachType:'',
    pName:'',
    pAge:0,
    pGender:'',
    pDisabled:'',
    price:0,
    totalDistance:localStorage.getItem("dist"),
    seatNumber:'',
    coachId:'',
    bookingDate:'2021-09-11',
    td:{
      tid:localStorage.getItem("tid")
    },
    cust:{
      cId:0,
      username:localStorage.getItem("userid")
    }
  }

  flag=false;
  bool=false;
  msg:any='';


    checkavailabilty(){

      console.log("button clicked ok")
        this.service.checkAvailableSeat(this.booking.coachType).subscribe(
          (Response:any)=>{
            console.log(Response)
            this.flag=Response;
            if(this.flag==false)
            this.bool=true
          },
          (err:any)=>{

          }
        );
    }
    distance:any='';
    finalprice:number=0;

    checkPrice(){
      this.distance=localStorage.getItem("dist");
      this.finalprice=this.distance*2;
      if(this.booking.coachType=="availAcSleeperSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*60)/100;
        if(this.booking.pAge<=5)
        this.finalprice=0;
        else if(this.booking.pAge>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else if(this.booking.coachType=="availAcSittingSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*40)/100;
        if(this.booking.pAge<=5)
        this.finalprice=0;
        else if(this.booking.pAge>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else if(this.booking.coachType=="availNonAcSleeperSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*35)/100;
        if(this.booking.pAge<=5)
        this.finalprice=0;
        else if(this.booking.pAge>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else
      {
        if(this.booking.pAge<=5)
        this.finalprice=0;
        else if(this.booking.pAge>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
    }

source=localStorage.getItem("start");
    confirmbooking(){
      console.log(this.booking);
      this.booking.price=this.finalprice;
      this.service.addBooking(this.booking).subscribe(
        (Response:any)=>{
          alert("data submitted");
          console.log(this.booking)
        },
      (err:any)=>{
        alert("failed to add booking")
      }
      )

    }
  }