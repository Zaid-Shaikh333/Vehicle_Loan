import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ViewClientsService } from '../Services/ViewclientsService';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

//public AllApprovedUserList=[];
  adminName: any;
  adminId: any;
  Message?: any;
  errmsg: any;
  c?: Viewclients;

  constructor(private uservice: ViewClientsService) { }

<<<<<<< HEAD
  constructor ( private router:Router,private uservice:ViewClientsService) { }

  clients:any;
=======
  clients: any;
>>>>>>> 84421bd6a0b87b0e41261de7880b6564b0e86b17

  ngOnInit() {
    /*this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }*/
    this.fetchData();
<<<<<<< HEAD
    
}
fetchData() {
  debugger;
  this.uservice.GetApprovals().subscribe((data) => {console.table(data); this.clients = data});
}
=======


  }
  fetchData() {
    debugger;
    this.uservice.GetApprovals().subscribe((data) => {console.table(data); this.clients = data});
  }
>>>>>>> 84421bd6a0b87b0e41261de7880b6564b0e86b17
}