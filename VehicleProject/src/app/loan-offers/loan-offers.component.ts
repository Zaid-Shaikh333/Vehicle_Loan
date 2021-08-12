import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['./loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loanTenure:any;
  rateOfInterest:any;
  Apply(){
      if(this.loanTenure<5){
        this.rateOfInterest=6;
      }
      else if(this.loanTenure>5&&this.loanTenure<10){
          this.rateOfInterest=8;
      }
      else{
        this.rateOfInterest=10;
      }
      return this.rateOfInterest;
  }
}
