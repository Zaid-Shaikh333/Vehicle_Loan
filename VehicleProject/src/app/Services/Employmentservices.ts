import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employment } from "../Models/Employmentmodel";

@Injectable({ providedIn: "root" })
export class Employmentservices {
    constructor(private http: HttpClient) {

    }
    public uri = "http://localhost:23810/api/employmentdetails";

    insertemployment(employment: Employment) {
        debugger;
        return this.http.post(this.uri, employment);
    }
}