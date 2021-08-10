import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employment } from '../Models/Employmentmodel';
import { Loan } from '../Models/Loanmodel';
import { Vehicle } from '../Models/Vehiclemodel';
import { Employmentservices } from '../Services/Employmentservices';
import { LoanServices } from '../Services/LoanServices';
import { VehicleService } from '../Services/VehicleService';


@Component({
  selector: 'app-vehicleloan',
  templateUrl: './vehicleloan.component.html',
  styleUrls: ['./vehicleloan.component.css']
})
export class VehicleloanComponent implements OnInit {

  title = 'trialvehicleloan';
  isLinear = true;

  employmentform: any;
  vehicleform: any;
  loandetailsform: any;
  documentsform: any;

  constructor(private _formBuilder: FormBuilder,private vehicleservice: VehicleService,private loanservice: LoanServices,private empservice: Employmentservices) { }

  ngOnInit() {
    ;
    this.employmentform = new FormGroup({
      employementType: new FormControl(null, Validators.required),
      annualSalary: new FormControl(null, Validators.required),
      emi: new FormControl(null, Validators.required),
      otherIncome: new FormControl(null, Validators.required)
    });


    this.vehicleform = new FormGroup({
      manufacturer: new FormControl(null, Validators.required),
      vehicleType: new FormControl(null, Validators.required),
      vehicleModel: new FormControl(null, Validators.required),
      exShowroomPrice: new FormControl(null, Validators.required)
    });

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

    this.documentsform = new FormGroup({
      aadharcard: new FormControl(null, Validators.required),
      pancard: new FormControl(null, Validators.required),
      paymentslip: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required)
    });
  }
  message: any;
  emp: Employment = {};
  vehicle: Vehicle = {};
  loan1: Loan = {};

  submit() {
    debugger;
    this.empservice.insertemployment(this.emp).subscribe((data) => this.message = data);
    this.vehicleservice.insertvehicle(this.vehicle).subscribe((data) => this.message = data);
    this.loanservice.insertloan(this.loan1).subscribe((data) => this.message = data);
  }
}
