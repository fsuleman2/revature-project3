import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { routedetails } from '../../admin/model/routedetails';

@Component({
  selector: 'app-customer-welcome',
  templateUrl: './customer-welcome.component.html',
  styleUrls: ['./customer-welcome.component.css']
})
export class CustomerWelcomeComponent implements OnInit {

  constructor(private service: TrainService) { }
  routedetails: routedetails[] = [];

  public search = {
    start: '',
    end: '',
    date: ''
  }

  bool: boolean = true;
  msg: any = "";
  ngOnInit(): void {
  }

  searchtrain() {
    this.service.searchTrain(this.search).subscribe(
      (Response: any) => {
        this.bool=true
        console.log(Response)
        this.routedetails = Response
      },
      (err: any) => {
        // window.location.reload();
        this.bool = false;
        this.msg= "Trains are not running between these Routes";
        // alert("Trains are not running between these Routes")
      });
  }

}
