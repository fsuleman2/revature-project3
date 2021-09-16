import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item = {
    id:localStorage.getItem("tid"),
    name:localStorage.getItem("name"),
    start:localStorage.getItem("start"),
    end:localStorage.getItem("end")
  }

  size=350;
  qrInfo = JSON.stringify(this.item);

}
