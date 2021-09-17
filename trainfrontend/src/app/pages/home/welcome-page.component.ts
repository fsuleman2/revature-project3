import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
formSubmit(){
  Swal.fire('Response Recorded Successfully','Our Team will Contact you soon','success')
}
}
