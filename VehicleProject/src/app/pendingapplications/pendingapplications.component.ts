import { Component, OnInit } from '@angular/core';
import { PendingService } from '../Services/PendingService';

@Component({
  selector: 'app-pendingapplications',
  templateUrl: './pendingapplications.component.html',
  styleUrls: ['./pendingapplications.component.css']
})
export class PendingapplicationsComponent implements OnInit {

  adminName: any;
  adminId: any;
  Message?: any;
  errmsg: any;
 

  constructor(private uservice: PendingService) { }

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
  this.uservice.GetPending_Applications().subscribe((data) => {console.table(data); this.clients = data});
}

    approveLoan()
  {
    
  }

  rejectLoan()
  {
    
  }


}
