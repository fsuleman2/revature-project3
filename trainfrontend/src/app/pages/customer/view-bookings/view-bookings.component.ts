import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { bookingDetails } from '../../admin/model/bookingDetails';
import { cancel } from '../../admin/model/cancel';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

rev: bookingDetails []= [];
can: cancel [] = [];
  constructor(private _bookingService:BookingService) { }

  ngOnInit(): void {
  }
viewBookings(){
  this._bookingService.viewBookings().subscribe(
    (data:any)=>{
      console.log(data);
      this.rev=data;
      console.log(this.rev);
    },(error:any)=>{
      console.log(error);
    }
  );
}


//for view cancellation
viewCancel(){
  this._bookingService.viewCancel().subscribe(
    (data:any)=>{
      console.log(data)
      this.can=data;
    }
  );
}

}
