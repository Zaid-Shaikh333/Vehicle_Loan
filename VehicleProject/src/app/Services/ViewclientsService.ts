import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Loan } from "../Models/Loanmodel";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class ViewClientsService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/approval";
    readonly uri2="http://localhost:23810/api/loandetails";


    //calling GetVehicleDetails() method from api
    GetApproved_Applications()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    SetApproved_Applications(id:any,status:"Accepted",lm:Loan)
    {
        return this.http.put(this.uri2+"/"+id+"/"+status,lm);
    }
    
    
}