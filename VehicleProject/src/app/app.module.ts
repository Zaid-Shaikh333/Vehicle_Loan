import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { RejectedlistComponent } from './rejectedlist/rejectedlist.component';
import { PendingapplicationsComponent } from './pendingapplications/pendingapplications.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserloginComponent,
    EmicalculatorComponent,
    AdmindashboardComponent,
    ClientlistComponent,
    RejectedlistComponent,
    PendingapplicationsComponent,
    UserdashboardComponent,
    VehicleloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
