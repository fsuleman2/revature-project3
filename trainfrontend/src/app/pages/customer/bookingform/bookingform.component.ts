import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }
  public booking={
    seattype:'',
    pname:'',
    page:0,
    pgender:'',
    disable:''

  }
  flag:boolean=false;
  msg:any='';
    checkavailabilty(seattype:any){
        this.service.checkAvailabilty(seattype).subscribe(
          (Response:any)=>{
            this.flag=Response;
          },(error:any)=>{
            this.flag = false;
            this.msg = "Seats are not available ! select another type or another train!!";
          }
        )
    }

    onSubmit(){
      
    }


}
