import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private https:HttpClient) { }
  public addTrain(train:any){
    console.log(train)
    return this.https.post(`${baseUrl}/train/add`,train);
  }
}
