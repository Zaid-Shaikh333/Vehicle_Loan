import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { adminlogin } from "../Models/adminlogin";
@Injectable({providedIn:"root"})
export class adminloginService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:23810/api/adminlogin";

    //calling GetVehicleDetails() method from api
    GetUser(user:adminlogin):Observable<any>
    {
        //debugger;
        return this.http.get<any>(this.uri+"?email="+user.email+"&password="+user.password);
        
    }
    
    
}