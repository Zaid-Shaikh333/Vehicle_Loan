import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { RejectedlistComponent } from './rejectedlist/rejectedlist.component';
import { PendingapplicationsComponent } from './pendingapplications/pendingapplications.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserloginComponent,
    EmicalculatorComponent,
    AdmindashboardComponent,
    ViewClientsComponent,
    RejectedlistComponent,
    PendingapplicationsComponent,
    UserdashboardComponent,
    VehicleloanComponent,
    EligibilityComponent,
    ForgotpasswordComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
