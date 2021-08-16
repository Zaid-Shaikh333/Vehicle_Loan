import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emischedular',
  templateUrl: './emischedular.component.html',
  styleUrls: ['./emischedular.component.css']
})
export class EmischedularComponent implements OnInit {
//startDate=localStorage.getItem('startdate');
//Tenure=localStorage.getItem('tenure');
Dates=new Date(2021,8,14).toDateString();
startDate=new Date(this.Dates);
Tenure=60;

endDate=new Date (new Date().setMonth(this.startDate.getMonth()+this.Tenure)).toDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
