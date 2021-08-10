import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from '../Models/Vehiclemodel';

@Injectable({ providedIn: "root" })
export class VehicleService {
    constructor(private http: HttpClient) { }

    readonly uri = "https://localhost:44334/api/vehicledetails";

    getvehicle() {
        return this.http.get(this.uri);
    }

    insertvehicle(vehicle: Vehicle) {
        debugger;
        return this.http.post(this.uri, vehicle);
    }
}