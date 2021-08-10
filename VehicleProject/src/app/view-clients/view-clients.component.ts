import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ViewClientsService } from '../Services/ViewclientsService';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {


  adminName:any;
  adminId:any;
  Message?:any;
  errmsg:any;

  constructor ( private router:Router,private uservice:ViewClientsService) { }

  clients:any;

  ngOnInit() {
    /*this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }*/
    this.fetchData();
    
}
fetchData() {
  debugger;
  this.uservice.GetApprovals().subscribe((data) => {console.table(data); this.clients = data});
}
}