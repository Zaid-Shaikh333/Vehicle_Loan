import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    ;
    this.employmentform = new FormGroup({
      employementType: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
      existingEMI: new FormControl(null, Validators.required),
      otherSources: new FormControl(null, Validators.required)
    });


    this.vehicleform = new FormGroup({
      manufacturer: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      exShowroomPrice: new FormControl(null, Validators.required)
    });

    this.loandetailsform = new FormGroup(
      {
        amount: new FormControl(null, Validators.required),
        loanTenure: new FormControl(null, Validators.required),
        ROI: new FormControl(null, Validators.required),
        startdate: new FormControl(null, Validators.required),
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

  submit() {
    console.log(this.employmentform?.value);
    console.log(this.vehicleform?.value);
    console.log(this.loandetailsform?.value);
  }
}
