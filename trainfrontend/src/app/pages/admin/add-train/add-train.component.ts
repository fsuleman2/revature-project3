import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';
import { routedetails } from '../model/routedetails';
import { traindetails } from '../model/traindetails';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(private trainService:TrainService,private route:Router,private snack:MatSnackBar) { }
  td:traindetails=new traindetails;
  ngOnInit(): void {
  }
  public train={
    tid:'',
    tno:'',
    tname:'',
    start:'',
    stop:'',
    date:'',
    totalCoach:'',
    acSleeperCoach:'',	 
     acSittingCoach:'',	 
     nonAcSleeperCoach:'',
     nonAcSittingCoach:'',
     totalAcSleeperSeat:0,	
     availAcSleeperSeat:0,
     totalAcSittingSeat:0,
     availAcSittingSeat:0,
     totalNonAcSleeperSeat:0,
     availNonAcSleeperSeat:0,
     totalNonAcSittingSeat:0,
     availNonAcSittingSeat:0
  }

  //from submit
formSubmit(){

  console.log(this.train)

  this.train.totalNonAcSittingSeat=Number(this.train.nonAcSittingCoach)*70;
  this.train.availNonAcSittingSeat=Number(this.train.nonAcSittingCoach)*70;

  this.train.totalNonAcSleeperSeat=Number(this.train.nonAcSleeperCoach)*50;
  this.train.availNonAcSleeperSeat=Number(this.train.nonAcSleeperCoach)*50;

  this.train.totalAcSittingSeat=Number(this.train.acSittingCoach)*70;
  this.train.availAcSittingSeat=Number(this.train.acSittingCoach)*70;

  this.train.totalAcSleeperSeat=Number(this.train.acSleeperCoach)*50;
  this.train.availAcSleeperSeat=Number(this.train.acSleeperCoach)*50;

  this.trainService.addTrain(this.train).subscribe(
    (data:any)=>{
      this.td=data;
      Swal.fire('Successfully done !!', '' +this.td.tid, 'success').then((e)=>{
        this.route.navigate(['/admin/dashboard'])
      })
      console.log(data);
      window.location.reload(); //remove this
    },
    (error:any)=>{
      this.snack.open('Something Wrong Happend','' ,{
        duration: 3000,
      });
      console.log(error);
    }
  );
  }
}
