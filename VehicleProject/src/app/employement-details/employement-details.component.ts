import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employment } from '../Models/Employmentmodel';
import { Employmentservices } from '../Services/Employmentservices';

@Component({
  selector: 'app-employement-details',
  templateUrl: './employement-details.component.html',
  styleUrls: ['./employement-details.component.css']
})
export class EmployementDetailsComponent implements OnInit {

  Userid=1;
  employmentform;
  constructor(private empservice: Employmentservices) {
    this.employmentform = new FormGroup(
      {
        employementType: new FormControl(null, Validators.required),
        annualSalary: new FormControl(null, Validators.required),
        emi: new FormControl(null, Validators.required),
        otherIncome: new FormControl(null, Validators.required)
      }
    )
  }

  ngOnInit(): void {
  }

  message: any;
  emp: Employment = {userId:this.Userid};

  addEmp() {
    debugger;
    this.empservice.insertemployment(this.emp).subscribe((data) => this.message = data);
  }

}
