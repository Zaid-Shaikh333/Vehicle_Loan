import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmiService } from '../Services/emischedulerservice';
import { Loan } from '../Models/Loanmodel';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-emischeduler',
  templateUrl: './emischeduler.component.html',
  styleUrls: ['./emischeduler.component.css']
})
export class EmischedulerComponent implements OnInit {
//date=localStorage.getItem('startdate');
//startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
//endDate = new Date(new Date().setMonth(new Date().getMonth() + Number(this.loanTenure))).toDateString();

  loandetails:Loan={};
  constructor(private uservice: EmiService) { }
id=localStorage.getItem('userid');
  ngOnInit(): void {
    this.uservice.GetSchedule(this.id).subscribe((data) => {console.table(data); this.loandetails = data});

  }
  

}
