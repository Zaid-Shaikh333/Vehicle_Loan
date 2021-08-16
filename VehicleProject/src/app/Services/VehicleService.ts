import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from '../Models/Vehiclemodel';

@Injectable({ providedIn: "root" })
export class VehicleService {
    constructor(private http: HttpClient) { }

    readonly uri = "http://localhost:23810/api/vehicledetails";

    getvehicle(id:any) {
        debugger;
        return this.http.get(this.uri+"/"+id);
    }

    insertvehicle(vehicle: Vehicle) {
        debugger;
        return this.http.post(this.uri, vehicle);
    }
}