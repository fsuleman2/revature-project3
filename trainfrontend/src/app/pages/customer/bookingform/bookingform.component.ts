import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TrainService } from 'src/app/services/train.service';
import { traindetails } from '../../admin/model/traindetails';
import { ViewTrainsComponent } from '../../admin/view-trains/view-trains.component';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  constructor( private service:BookingService) { }
 // , private train:ViewTrainsComponent)
  ngOnInit(): void {
  }
  public booking = {
    seattype: '',
    pname: '',
    page: 0,
    pgender: '',
    disable: ''

  }
  t:traindetails=new traindetails;
// t:any=this.train.trains;
  flag:boolean=false;
  msg:any='';
    checkavailabilty(seattype:any){
        this.service.getTrainById(localStorage.getItem("tid")).subscribe(
          (Response:any)=>{
            this.t=Response;
            console.log(Response)
            if(seattype =='availAcSleeperSeat'){
               this.flag=(this.t.availAcSleeperSeat>0)?true:false;
            }
            else if (seattype =='availNonAcSleeperSeat'){
               this.flag=(this.t.availNonAcSleeperSeat>0)?true:false;
            } 
            else if(seattype =='availNonAcSittingSeat'){
              this.flag=(this.t.availNonAcSittingSeat>0)?true:false;
            }
            else if(seattype =='availAcSittingSeat'){
               this.flag=(this.t.availAcSittingSeat>0)?true:false;
            } else{
              this.flag= false;
            }
          }               
          ,(error:any)=>{
            this.flag = false;
            this.msg = "Seats are not available ! select another type or another train!!";
          }
        )
    }

    


    onSubmit(){
      
    }


}
