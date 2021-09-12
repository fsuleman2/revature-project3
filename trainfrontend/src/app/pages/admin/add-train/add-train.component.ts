import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(private trainService:TrainService) { }

  ngOnInit(): void {
  }
  public train={
    tid:0,
    tno:'',
    tname:'',
    start:'',
    stop:'',
    date:'',
    totalCoach:0,
    acSleeperCoach:0,	 
     acSittingCoach:0,	 
     nonAcSleeperCoach:0,
     nonAcSittingCoach:0,
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

  this.train.totalNonAcSittingSeat=this.train.nonAcSittingCoach*70;
  this.train.availNonAcSittingSeat=this.train.nonAcSittingCoach*70;

  this.train.totalNonAcSleeperSeat=this.train.nonAcSleeperCoach*50;
  this.train.availNonAcSleeperSeat=this.train.nonAcSleeperCoach*50;

  this.train.totalAcSittingSeat=this.train.acSittingCoach*70;
  this.train.availAcSittingSeat=this.train.acSittingCoach*70;

  this.train.totalAcSleeperSeat=this.train.acSleeperCoach*50;
  this.train.availAcSleeperSeat=this.train.acSleeperCoach*50;

  this.trainService.addTrain(this.train).subscribe(
    (data:any)=>{
      alert("submited")
      console.log(data);
      window.location.reload(); //remove this
    },
    (error:any)=>{
      alert("error")
      console.log(error);
    }
  );
  }
}
