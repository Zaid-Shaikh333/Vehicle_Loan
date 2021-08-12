import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userlogin } from '../Models/userlogin';
import { userloginService } from '../Services/userloginService';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  
userlogin: FormGroup;
  
  constructor(private ulservice:userloginService) {
    this.userlogin = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
   }

ngOnInit() {
  //this.onSubmit();
}

login:userlogin={};
onSubmit() {
 debugger; //this.signupForm.get('user_name').value
this.ulservice.GetUser(this.userlogin.value).subscribe((data) => {console.table(data); this.login = data});
}

}
