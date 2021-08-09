import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  public AllApprovedUserList = [];

  adminName:any;
  adminId:any;
  service: any;
  constructor ( private router:Router) { }
  
  ngOnInit() {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
    this.service.viewApproved()
    .subscribe((data: never[]) => this.AllApprovedUserList = data);

}
}