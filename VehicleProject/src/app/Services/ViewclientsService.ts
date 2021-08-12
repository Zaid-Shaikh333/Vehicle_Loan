import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class ViewClientsService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/approval";


    //calling GetVehicleDetails() method from api
    GetApproved_Applications()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    
    
}