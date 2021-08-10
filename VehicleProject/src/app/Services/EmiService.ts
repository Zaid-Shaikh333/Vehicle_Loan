import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Emi } from "../Models/Emi";

@Injectable({providedIn:"root"})
export class EmiService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="https://localhost:44334/api/emi";

    //calling GetVehicleDetails() method from api
    GetUser(e:Emi)
    {

        //debugger;
        return this.http.post(this.uri,e);
    }
    
    
}