import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { userlogin } from "../Models/userlogin";

@Injectable({providedIn:"root"})
export class userloginService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:52677/api/users";

    //calling GetVehicleDetails() method from api
    GetUser(user:userlogin)
    {
        //debugger;
        return this.http.post(this.uri,user);
    }
    
    
}