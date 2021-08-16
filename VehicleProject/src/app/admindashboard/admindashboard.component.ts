import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/homepage']);
  }

}
