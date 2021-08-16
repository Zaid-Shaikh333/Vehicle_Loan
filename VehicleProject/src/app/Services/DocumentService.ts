import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.uri}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.uri}/files`);
  }
}
    