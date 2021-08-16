import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userlogin } from "../Models/userlogin";

@Injectable({providedIn:"root"})
export class userloginService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:23810/api/Login";

    //calling GetVehicleDetails() method from api
    GetUser(user:userlogin):Observable<any>
    {
        //debugger;
        return this.http.get<any>(this.uri+"?email="+user.email+"&password="+user.password);
        
    }
    
    
}