import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class PendingService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/pending";


    //calling GetVehicleDetails() method from api
    GetPending_Applications()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    /*accept()
    {
        return this.http.patch(this.uri);
    }
    */
}