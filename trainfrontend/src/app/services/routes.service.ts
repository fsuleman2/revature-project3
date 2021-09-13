import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }

  public getTrainsOfRoute(tid:any){
    this.http.get(`${baseUrl}/`)
  }
}
