import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { EmployementDetailsComponent } from './employement-details/employement-details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LogoutComponent } from './logout/logout.component';
import { PendingapplicationsComponent } from './pendingapplications/pendingapplications.component';
import { RegistrationComponent } from './registration/registration.component';
import { RejectedlistComponent } from './rejectedlist/rejectedlist.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'login',component:UserloginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'admindash',component:ViewClientsComponent},
  {path:'userdash',component:UserdashboardComponent},
  {path:'emical',component:EmicalculatorComponent},
  {path:'pending',component:PendingapplicationsComponent},
  {path:'viewall',component:ViewClientsComponent},
  {path:'reject',component:RejectedlistComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'eligible',component:EligibilityComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'loanoffers',component:LoanOffersComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'alogin',component:AdminloginComponent},
  {path:'employment',component:EmployementDetailsComponent},
  {path:'vehicle',component:VehicleDetailsComponent},
  {path:'loan',component:LoanDetailsComponent},
{path:'logout',component:LogoutComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
