import { formatDate } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../Models/Loanmodel';
import { LoanServices } from '../Services/LoanServices';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  vehicleid1 = sessionStorage.getItem('vehicleid');
  userid = sessionStorage.getItem('userid');
  //vehicleid = localStorage.getItem('vehicleid');
  loanTenure: any;
  montlyEmi: any;
  rateOfInterest: any;
  enddate: any;
  loanAmount: any;
  status: any;
  public progress!: number;
  public message!: string;

  loandetailsform;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private loanservice: LoanServices,private router:Router,private http: HttpClient) {
    this.loandetailsform = new FormGroup(
      {
        loanAmount: new FormControl(null, Validators.required),
        loanTenure: new FormControl(null, Validators.required),
        aadhar:new FormControl(null,Validators.required)
       // rateOfInterest: new FormControl(null, Validators.required),
        //startDate: new FormControl(null, Validators.required),
        //enddate: new FormControl(null,Validators.required),
        //montlyEmi: new FormControl(null,Validators.required)

      }
    );
  }
  selectChangeHandler() {
    debugger;
    console.log(this.userid);
    if (this.loanTenure == 60) {
      this.montlyEmi = "7%";
    }
    else if (this.loanTenure == 120) {
      this.montlyEmi = "7.5%";
    }
    else if (this.loanTenure == 180) {
      this.montlyEmi = "8%";
    }
    else if (this.loanTenure == 240) {
      this.montlyEmi = "8.5%";
    }

  }

  registerloan() {
    debugger;
    if (this.loanTenure == 60) {
      this.rateOfInterest = 7;
    }
    else if (this.loanTenure == 120) {
      this.rateOfInterest = 7.5;
    }
    else if (this.loanTenure == 180) {
      this.rateOfInterest = 8;
    }
    else if (this.loanTenure == 24) {
      this.rateOfInterest = 8.5;
    }



    var loan : Loan = {status:"pending", userId : this.userid,vehicleId:this.vehicleid1};
    loan.status = "Pending";
    loan.rateOfInterest = this.rateOfInterest;
    loan.loanAmount = this.loanAmount;


    loan.endDate = new Date(new Date().setMonth(new Date().getMonth() + Number(this.loanTenure))).toDateString();
    loan.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    loan.status = "Pending";
    loan.loanTenure = this.loanTenure;
    loan.userId = this.userid;
    // loan.emi=this.loanAmount*(this.interestRate/12)*(((1+this.interestRate/120)^this.tenure)/(((1+this.interestRate/120)^this.tenure)-1));
    loan.monthlyEmi = ((this.loanAmount * ((this.rateOfInterest / 100) / 12)) * ((Math.pow((1 + ((this.rateOfInterest / 100) / 12)), this.loanTenure)) / ((Math.pow((1 + ((this.rateOfInterest / 100) / 12)), this.loanTenure)) - 1)));
    this.loanservice.insertloan(loan).subscribe((data)=>
       {
         console.log(data);

      }
    );
    alert("New Loan Registered!!");

    this.router.navigate(['userdash']);

  }


  ngOnInit(): void {
    if(this.userid==null)
    {
      this.router.navigate(['/login'])

    }

  }



  fetch() {

    // this.loanservice.getloan().subscribe((data: any) => { this.message = data }
    //);


  }

  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let filesToUpload : File[] = files;
    const formData = new FormData();
    
  Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);});
   
    //const filename =file.name;
    this.http.post('http://localhost:23810/api/document', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
        if (event.total) {  
          const total: number = event.total;  
          this.progress = Math.round(100 * event.loaded / total);
        }
        else  {
          this.message = 'Upload success.';
          alert("uploaded");
        //  debugger;
          //console.log(filename);
          //this.onUploadFinished.emit(event.body);
        }
      }
      });
  }


  








 

}
