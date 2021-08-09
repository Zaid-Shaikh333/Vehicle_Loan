import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { registration } from "../Models/registration";

@Injectable({providedIn:"root"})
export class registrationService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:52677/api/users";

    //calling GetVehicleDetails() method from api
    GetUser()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    
}