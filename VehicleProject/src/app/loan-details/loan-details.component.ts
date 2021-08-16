import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Emi } from '../Models/Emi';
import { Loan } from '../Models/Loanmodel';
import { LoanServices } from '../Services/LoanServices';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  loan?: any;
  vehicleid = localStorage.getItem('vehicleid');
  userid = 4;
  //vehicleid = localStorage.getItem('vehicleid');

  loandetailsform;
  constructor(private loanservice: LoanServices) {
    this.loandetailsform = new FormGroup(
      {
        loanAmount: new FormControl(null, Validators.required),
        loanTenure: new FormControl(null, Validators.required),
        rateOfInterest: new FormControl(null, Validators.required),
        startDate: new FormControl(null, Validators.required),
        //enddate: new FormControl(null,Validators.required),
        //montlyEmi: new FormControl(null,Validators.required)
      }
    );
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {

    this.loanservice.getloan().subscribe((data: any) => { this.message = data }
    );


  }


  message?: any;


  loan1: Loan = { userId: this.userid, vehicleId: this.vehicleid };
  // loan1.endDate=new Date(new Date().setMonth(new Date().getMonth() + Number(this.loanTenure)));


session_interest:any;
session_tenure:any;
session_amount:any;
session_startdate:any;



  addLoan() {
    debugger;
    this.loanservice.insertloan(this.loan1).subscribe((data) => this.message = data);
    this.loanservice.getloan().subscribe((data: any) => { this.message = data;
    this.session_interest=localStorage.setItem('interest',data[0].rateOfInterest); 
    this.session_amount=localStorage.setItem('amount',data[0].loanAmount);
    this.session_tenure=localStorage.setItem('tenure',data[0].loanTenure);
    this.session_startdate=localStorage.setItem('startdate',data[0].startDate);
  })
  };
  

}
