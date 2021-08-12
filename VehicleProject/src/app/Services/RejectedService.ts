import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Viewclients } from "../Models/Viewclients";


@Injectable({providedIn:"root"})
export class RejectedService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/rejected";


    //calling  method from api
    GetRejected_Applications()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    
    
}