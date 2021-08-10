import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { registration } from '../Models/registration';
import { registrationService } from '../Services/registrationService';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationform: FormGroup;
  constructor(private regservice:registrationService) {
    this.registrationform = new FormGroup({
      FirstName:new FormControl(null,Validators.required),
      LastName:new FormControl(null,Validators.required),
      Gender:new FormControl(null,Validators.required),
      MobileNo:new FormControl(null,Validators.required),
      Email:new FormControl(null,Validators.required),
      Password:new FormControl(null,Validators.required),
      Address:new FormControl(null,Validators.required),
      City:new FormControl(null,Validators.required),
      State:new FormControl(null,Validators.required),
      Pincode:new FormControl(null,Validators.required)
    })
   }




  ngOnInit(): void {

  }
user:registration={};
message:any;
  PostUser()
  {
    this.regservice.GetUser(this.user).subscribe((data)=>this.message=data);
  }

}
