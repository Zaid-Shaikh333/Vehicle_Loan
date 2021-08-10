import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Viewclients } from '../Models/Viewclients';
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

  clients:Viewclients={};

  ngOnInit() {
    /*this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }*/
    this.fetchData();
    
}
fetchData(){
  this.uservice.GetApprovals().subscribe((data)=>{console.table(data); this.clients = data},
  (err) => {
    this.errmsg = err.console.error.Message;
  });
}
}