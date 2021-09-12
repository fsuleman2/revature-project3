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
    totalCoach:'',
    acSleeperCoach:'',	 
     acSittingCoach:'',	 
     nonAcSleeperCoach:0,
     nonAcSittingCoach:'',
     totalAcSleeperSeat:'',	
     availAcSleeperSeat:'',
     totalAcSittingSeat:'',
     availAcSittingSeat:'',
     totalNonAcSleeperSeat:0,
     availNonAcSleeperSeat:0,
     totalNonAcSittingSeat:'',
     availNonAcSittingSeat:''
  }

  //from submit
formSubmit(){
  alert("sclicked")
  console.log(this.train)
  this.train.totalNonAcSleeperSeat=this.train.nonAcSleeperCoach*50;
  this.train.availNonAcSleeperSeat=this.train.nonAcSleeperCoach*50;
  this.trainService.addTrain(this.train).subscribe(
    (data:any)=>{
      alert("submited")
      console.log(data);
    },
    (error:any)=>{
      alert("error")
      console.log(error);
    }
  );
  }
}
