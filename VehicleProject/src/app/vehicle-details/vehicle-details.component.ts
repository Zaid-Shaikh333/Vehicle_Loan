import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../Models/Vehiclemodel';
import { VehicleService } from '../Services/VehicleService';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicleform;
  userid = 4;
  sessiondta: any;
  vid: any;
  vid1 = localStorage.getItem('vehicleid');
  constructor(private vehicleservice: VehicleService, private router: Router) {
    this.vehicleform = new FormGroup(
      {

        manufacturer: new FormControl(null, Validators.required),
        vehicleType: new FormControl(null, Validators.required),
        vehicleModel: new FormControl(null, Validators.required),
        exShowroomPrice: new FormControl(null, Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }
  message: any;

  vehicle: Vehicle = { userId: this.userid };
  addVehicle() {
    debugger;
    //this.vehicleservice.insertvehicle(this.vehicle).subscribe((data:any) =>{this.message = data; 
      
   // console.log(data[0].vehicleId);
     //this.vid = localStorage.setItem('vehicleid', data[0].vehicleId);}
    //});
   this.vehicleservice.getvehicle(this.userid).subscribe((data: any) => {
     

     
      console.log(data[0]);

      //this.vid= localStorage.setItem('vehicleId', this.vehicleform.value.vehicleId);
     // this.vid = localStorage.setItem('vehicleid', data[0].vehicleId);
      //console.log(this.vid);
      //this.router.navigate(['loan']);


    }


    );
  }


}
