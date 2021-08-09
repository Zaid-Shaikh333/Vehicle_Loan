import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserloginComponent,
    EmicalculatorComponent,
    AdmindashboardComponent,
    ViewClientsComponent,
    RejectedlistComponent,
    PendingapplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
