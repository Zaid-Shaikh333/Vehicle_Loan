import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmiSchedular } from "../Models/EmiSchedular";


@Injectable({providedIn:"root"})
export class EmiService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="https://localhost:44334/api/emischedular";

    //calling GetVehicleDetails() method from api
    GetUser(e:EmiSchedular)
    {

        //debugger;
        return this.http.post(this.uri,e);
    }
    
    
}