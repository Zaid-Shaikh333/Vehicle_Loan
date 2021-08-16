import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Emi } from '../Models/Emi';
import { EmiService } from '../Services/EmiService';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
formval:FormGroup;
principle:any;
Tenure:any;
ROI:any;
top:any;
bottom:any;
sp:any;
e:any;
Emi:any;
total:any;
interest:any;


  
  constructor(private eservice:EmiService) { 
    this.formval=new FormGroup(
      {
        pr_amt:new FormControl(),
        loanTenure:new FormControl(),
        int_rate:new FormControl(),
      }
    )
  }

  ngOnInit(): void {
  }
  emi:Emi={};
  message:any;
  GetEmi() {

    var loanAmount = Number(this.emi.Principle);
    var Tenure=Number(this.emi.Tenure)*12;
    var rateOfInterest = Number(this.emi.ROI);
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;

    this.emi.Principle = loanAmount.toString();
    this.emi.ROI = rateOfInterest.toString();
    
    
debugger;
    var top = Math.pow((1 + monthlyInterestRatio), Tenure);
    var bottom = top - 1;
    var sp = top / bottom;
    var e = ((loanAmount * monthlyInterestRatio) * sp);
    var full = Tenure * e;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;

    this.e = e.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.total = full.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.interest = interest.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(e);
    alert("Your monthly EMI = "+e);
    localStorage.setItem('emi',this.e);
  }

}

