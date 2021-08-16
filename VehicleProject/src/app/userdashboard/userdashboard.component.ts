import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  Email = sessionStorage.getItem('email');
  Age = sessionStorage.getItem('age');
  Address= sessionStorage.getItem('address');
  Gender= sessionStorage.getItem('gender');
  Zipcode= sessionStorage.getItem('zipcode');
  Userid= sessionStorage.getItem('userid');
  Fname= sessionStorage.getItem('fname');
  Lname= sessionStorage.getItem('lname');

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.Userid==null)
    {
      this.router.navigate(['/login'])

    }
  }
  update(){}
}
