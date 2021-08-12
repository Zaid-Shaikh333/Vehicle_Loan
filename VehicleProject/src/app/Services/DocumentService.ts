import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Document } from "../Models/Document";


@Injectable({providedIn:"root"})
export class DocumentService
{
    constructor(private http:HttpClient)
    { 
    }

    readonly uri="http://localhost:23810/api/document";


    //calling  method from api
    PostDocument(doc:Document)
    {
        //debugger;
        return this.http.post(this.uri, doc);
    }
    
    
}