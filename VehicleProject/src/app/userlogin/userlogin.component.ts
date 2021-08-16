import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userlogin } from '../Models/userlogin';
import { userloginService } from '../Services/userloginService';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  userlogin: FormGroup;
  userid: any;
  firstname: any;
  lastname: any;

  constructor(private ulservice: userloginService, private router: Router) {
    this.userlogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    //this.onSubmit();
  }
  array: any;
  array1:any;
  sessionfname: any;
  sessionlname: any;
  sessionzipcode: any;
  sessionaddress: any;
  sessionemail: any;
  sessionuserid: any;
  sessiongender: any;
  sessionage:any;
  login: userlogin = {};
  onSubmit() {
    
    //this.signupForm.get('user_name').value
    this.ulservice.GetUser(this.userlogin.value).subscribe((data) => {
      console.table(data);
      
      //this.array = data[0].user_id;
      //console.log(this.array);
      debugger;
       
        this.sessionfname = sessionStorage.setItem('fname', data[0].first_name);
        this.sessionlname = sessionStorage.setItem('lname', data[0].last_name);
        this.sessionemail = sessionStorage.setItem('email', this.userlogin.value.email);
        this.sessionuserid = sessionStorage.setItem('userid', data[0].user_id);
        this.sessionage = sessionStorage.setItem('age', data[0].age);
        this.sessionaddress = sessionStorage.setItem('address', data[0].address);
        this.sessiongender = sessionStorage.setItem('gender', data[0].gender);
        this.sessionzipcode = sessionStorage.setItem('zipcode', data[0].pincode);
        alert('Login Successful');
       
        console.log(this.sessionuserid);
       
        this.router.navigate(['userdash']);
      }
    
    );
    console.log(this.sessionemail);



  }
}
