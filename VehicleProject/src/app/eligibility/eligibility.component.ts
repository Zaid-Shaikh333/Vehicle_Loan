import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    
  }

  elig?: boolean=false;
  stat?:string;
  onroadprice:number=0;
  monthlysavings:number=0;
  existingemi:number=0;
  loantenure:number=0;
  newemi:number = this.onroadprice/this.loantenure;
  
  checkeligiblity() {
    debugger;
    if (((this.onroadprice/this.loantenure)+this.existingemi)<=this.monthlysavings)
    {
      if(this.elig==false)
      {
        this.stat="USER IS ELIGIBLE!";
        alert(this.stat);
      }
    }
    else
    {
      this.stat="SORRY, YOU AREN'T ELIGIBLE!";
      alert(this.stat);
      window.location.reload();
    }
  }
}
