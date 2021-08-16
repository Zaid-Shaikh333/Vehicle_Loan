import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  disabled?: boolean=true;
  constructor() {}
  ngOnInit(): void {
    
    
  }

  elig?: boolean=false;
  stat?:string;
  onroadprice?:any;
  monthlysavings?:any;
  existingemi?:any;
  loantenure?:any;
  newemi:number = this.onroadprice/this.loantenure;
  
  checkeligiblity() {
    if (((this.onroadprice/this.loantenure)+this.existingemi)<=this.monthlysavings)
    {
      this.stat="USER IS ELIGIBLE!";
        alert(this.stat);
        this.disabled = !this.disabled;
    }
    else
    {
      this.stat="SORRY, YOU AREN'T ELIGIBLE!";
      alert(this.stat);
      window.location.reload();
    }
  }
}
