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
  Userid= sessionStorage.getItem('userid');

  sessiondta: any;
  vid: any;
  vid1 = sessionStorage.getItem('vehicleid');
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
    if(this.Userid==null)
    {
      this.router.navigate(['/login'])

    }
  }
  message: any;

  vehicle: Vehicle = { userId: this.Userid };
  addVehicle() {
    
    this.vehicleservice.insertvehicle(this.vehicle).subscribe((data:any) =>{this.message = data; 
      
   // console.log(data[0].vehicleId);
     //this.vid = localStorage.setItem('vehicleid', data[0].vehicleId);}
    });
   this.vehicleservice.getvehicle(this.Userid).subscribe((data: any) => {
     debugger;
     

     
      console.log(data[0]);

      //this.vid= localStorage.setItem('vehicleId', this.vehicleform.value.vehicleId);
      this.vid = sessionStorage.setItem('vehicleid', data[0].vehicleId);
      //console.log(this.vid);
      this.router.navigate(['loan']);


    }


    );
  }
}
