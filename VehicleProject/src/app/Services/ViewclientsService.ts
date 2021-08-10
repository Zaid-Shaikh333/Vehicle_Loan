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
<<<<<<< HEAD
    readonly uri="https://localhost:44334/api/approvals";
=======
    readonly uri="http://localhost:23810/api/approvals";
>>>>>>> 84421bd6a0b87b0e41261de7880b6564b0e86b17

    //calling GetVehicleDetails() method from api
    GetApprovals()
    {
        //debugger;
        return this.http.get(this.uri);
    }
    
    
}