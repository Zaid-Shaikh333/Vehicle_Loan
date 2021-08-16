import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Loan } from "../Models/Loanmodel";

@Injectable({providedIn:"root"})
export class EmiService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:23810/api/loandetails";

    //calling GetVehicleDetails() method from api
    GetSchedule(id:any)
    {

        //debugger;
        return this.http.get(this.uri);
    }
    
    
}