import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
 

  constructor(private uservice: ViewClientsService) { }




  clients: any;
date:any;
edate:any;

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
  this.uservice.GetApproved_Applications().subscribe((data) => {console.table(data); this.clients = data;
    this.date = this.clients[0].start_date;

     this.date = formatDate(this.date, 'yyyy-MM-dd', 'en-US');

     this.edate = this.clients[0].end_date;

     this.edate = formatDate(this.edate, 'yyyy-MM-dd', 'en-US');
});
}

}