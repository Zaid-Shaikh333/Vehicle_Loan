import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Loan } from '../Models/Loanmodel';

@Injectable({ providedIn: "root" })
export class LoanServices {
    constructor(private http: HttpClient) { }

    readonly uri = "http://localhost:23810/api/loandetails";


    getloan(id:any) {
        return this.http.get(this.uri+"/"+id);
    }

    insertloan(loan: Loan) {
        debugger;
        return this.http.post(this.uri, loan);
    }
}
