import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userlogin: FormGroup;

  constructor() {
    this.userlogin = new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
   }


   
  ngOnInit(): void {
  }

}
