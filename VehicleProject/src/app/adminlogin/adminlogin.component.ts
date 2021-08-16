import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminlogin } from '../Models/adminlogin';
import { adminloginService } from '../Services/adminloginservice';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin: FormGroup;
  
  constructor(private adservice:adminloginService,private router:Router) {

    this.adminlogin = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
   }

ngOnInit() {
  //this.onSubmit();

}
array: any;
array1:any;

sessionAemail: any;
sessionAdminId: any;

login:adminlogin={};

onSubmit() {
  //this.signupForm.get('user_name').value
  this.adservice.GetUser(this.adminlogin.value).subscribe((data)  => {
    console.table(data);
    debugger;
    //this.array = data[0].user_id;
    //console.log(this.array);
    
    if (data != null) {
      
      this.sessionAemail = localStorage.setItem('Aemail', this.adminlogin.value.email);
      this.sessionAdminId = localStorage.setItem('AdminId', data[0].admin_id);
      
      alert('Login Successful');
     
      console.log(this.sessionAdminId);
     
      this.router.navigate(['/admindash']);
    }
  }
  );
}
}

  



