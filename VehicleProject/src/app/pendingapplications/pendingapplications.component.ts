import { Component, OnInit } from '@angular/core';
import { PendingService } from '../Services/PendingService';
import { RejectedService } from '../Services/RejectedService';
import { Loan } from '../Models/Loanmodel';
import { ViewClientsService } from '../Services/ViewclientsService';
import { Router } from '@angular/router';


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
 

  constructor(private uservice: PendingService,private rservice:RejectedService,private aservice:ViewClientsService,private router:Router) { }

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
loan:Loan={};
  lm=new Loan();
fetchData() {
 // debugger;
  this.uservice.GetPending_Applications().subscribe((data) => {console.table(data);this.clients=data; 
});
  
}

    approveLoan(id:number)
  {
    //this.uservice.accept().subscribe((data) => {console.table(data);});
    this.loan.status="Accepted";
    this.aservice.SetApproved_Applications(id,"Accepted",this.lm).subscribe((data) => {console.table(data);this.clients=data});
alert("Application Approved!!!");
this.router.navigate(['/viewall'])

  }

  

  rejectLoan(id:number)
  {
    this.loan.status="Rejected";
    this.rservice.SetRejected_Applications(id,"Rejected",this.lm).subscribe((data) => {console.table(data);this.clients=data});
    alert("Application Rejected!!!");
this.router.navigate(['/reject'])
  }


}
