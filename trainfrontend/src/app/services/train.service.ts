import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  [x: string]: any;

  constructor(private https:HttpClient) { }
  public addTrain(train:any){
    console.log(train)
    return this.https.post(`${baseUrl}/train/add`,train);
  }

  searchRoute(id:any){
    console.log("Id : "+id)
    return this.https.get(`http://localhost:8787/train/route/get/`+id);
  }

}
