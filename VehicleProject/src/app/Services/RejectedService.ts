import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Loan } from "../Models/Loanmodel";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class RejectedService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/rejected";
    readonly uri2="http://localhost:23810/api/loandetails";


    //calling  method from api
    GetRejected_Applications()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    SetRejected_Applications(id:any,status:"Rejected",lm:Loan)
    {
        return this.http.put(this.uri2+"/"+id+"/"+status,lm);
    }
    
}