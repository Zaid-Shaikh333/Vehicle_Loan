import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

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
  constructor() { 
    this.formval=new FormGroup(
      {
        pr_amt:new FormControl(),
        period:new FormControl(),
        int_rate:new FormControl(),
      }
    )
  }

  ngOnInit(): void {
  }
  e?: number;
  emi()
  {
    this.principle=this.formval.get("pr_amt")?.value;
    this.Tenure=this.formval.get("period")?.value;
    this.ROI=this.formval.get("int_rate")?.value;

    this.e=this.principle*this.ROI[((1+this.ROI)**this.Tenure)/(((1+this.ROI)**this.Tenure)-1)]

    console.log(this.principle+" "+this.Tenure+" "+this.ROI);
    console.log(this.e);
  }


}