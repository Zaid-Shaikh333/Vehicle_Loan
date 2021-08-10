import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Loan } from '../Models/Loanmodel';

@Injectable({ providedIn: "root" })
export class LoanServices {
    constructor(private http: HttpClient) { }

    readonly uri = "https://localhost:44334/api/loandetails";


    getloan() {
        return this.http.get(this.uri);
    }

    insertloan(loan: Loan) {
        debugger;
        return this.http.post(this.uri, loan);
    }
}
