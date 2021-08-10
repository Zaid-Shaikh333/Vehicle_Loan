import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class ViewClientsService
{
    constructor(private http:HttpClient)
    { 
    }
    readonly uri="https://localhost:44334/api/approvals";

    //calling GetVehicleDetails() method from api
    GetApprovals()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    
    
}