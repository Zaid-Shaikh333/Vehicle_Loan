import { Component, OnInit } from '@angular/core';
import { RejectedService } from '../Services/RejectedService';

@Component({
  selector: 'app-rejectedlist',
  templateUrl: './rejectedlist.component.html',
  styleUrls: ['./rejectedlist.component.css']
})
export class RejectedlistComponent implements OnInit {
//public AllApprovedUserList=[];
adminName: any;
adminId: any;
Message?: any;
errmsg: any;


constructor(private rservice: RejectedService) { }




clients: any;


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
// debugger;
this.rservice.GetRejected_Applications().subscribe((data) => {console.table(data); this.clients = data});
}

}
