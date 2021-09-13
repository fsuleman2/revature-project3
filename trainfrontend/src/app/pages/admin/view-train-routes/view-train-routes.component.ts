import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-train-routes',
  templateUrl: './view-train-routes.component.html',
  styleUrls: ['./view-train-routes.component.css']
})
export class ViewTrainRoutesComponent implements OnInit {
tId:any;
tName:any;
routes=[];
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
   this.tId= this._route.snapshot.params.tid;//coming from app.route
   this.tName= this._route.snapshot.params.tname; //coming from app.route
   console.log(this.tId);
  }




}
