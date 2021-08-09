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
      firstname:new FormControl(null,Validators.required),
      lastname:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      mobile:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required)
    })
   }




  ngOnInit(): void {

  }



}
