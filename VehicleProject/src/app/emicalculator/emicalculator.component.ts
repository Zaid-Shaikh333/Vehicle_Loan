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
  GetEmi()
  {
    this.principle=this.formval.get("pr_amt")?.value;
    this.Tenure=this.formval.get("loanTenure")?.value;
    this.ROI=this.formval.get("int_rate")?.value;

    this.eservice.GetUser(this.emi).subscribe((data)=>this.message=data);
  }
}