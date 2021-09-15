import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { reservation } from '../../admin/model/reservation';



@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  constructor( private service:BookingService) { }

  ngOnInit(): void {
  }
  rev:reservation=new reservation
  public booking = {
    // bookingId:'',
    source:localStorage.getItem("start"),
    destination:localStorage.getItem("end"),
    travelDate:localStorage.getItem("date"),
    coachType:'',
    pname:'',
    page:0,
    pgender:'',
    pdisabled:'',
    price:0,
    totalDistance:localStorage.getItem("dist"),
    seatNumber:'',
    coachId:'',
    bookingDate:'2021-09-16',
    trainDetails:{
      tid:localStorage.getItem("tid")
    },
    customer:{
      cId:0,
      username:localStorage.getItem("userid")
    }
  }

  flag=false;
  bool=false;
  msg:any='';
  chk=false;

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
      this.chk=true;
      this.distance=localStorage.getItem("dist");
      this.finalprice=this.distance*2;
      if(this.booking.coachType=="availAcSleeperSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*60)/100;
        if(this.booking.page<=5)
        this.finalprice=0;
        else if(this.booking.page>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else if(this.booking.coachType=="availAcSittingSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*40)/100;
        if(this.booking.page<=5)
        this.finalprice=0;
        else if(this.booking.page>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else if(this.booking.coachType=="availNonAcSleeperSeat")
      {
        this.finalprice=this.finalprice+(this.finalprice*35)/100;
        if(this.booking.page<=5)
        this.finalprice=0;
        else if(this.booking.page>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
      else
      {
        if(this.booking.page<=5)
        this.finalprice=0;
        else if(this.booking.page>=60)
        this.finalprice=this.finalprice-(this.finalprice*10)/100;
        else
        this.finalprice=this.finalprice
      }
    }

source=localStorage.getItem("start");
    confirmbooking(){
      if(this.chk==true){
      console.log(this.booking);
      this.booking.price=this.finalprice;
      this.service.addBooking(this.booking).subscribe(
        (Response:any)=>{
          this.rev=Response;
          console.log(this.rev)
          alert("data submitted");
          window.location.href="/customer-dashboard/payment"
        },
      (err:any)=>{
        alert("failed to add booking")
      }
      )

    }
    else
    alert("calculate price first");
  }
 
  }