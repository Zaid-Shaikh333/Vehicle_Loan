import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
userId:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['homepage']);
    }
    else{
      sessionStorage.clear();
      setTimeout(function(){
        window.location.href = '/homepage';
     }, 1000);
    }
  }

}
