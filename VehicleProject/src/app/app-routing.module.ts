import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { PendingapplicationsComponent } from './pendingapplications/pendingapplications.component';
import { RegistrationComponent } from './registration/registration.component';
import { RejectedlistComponent } from './rejectedlist/rejectedlist.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VehicleloanComponent } from './vehicleloan/vehicleloan.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';

const routes: Routes = [
  //{path:'',redirectTo:'/admindash',pathMatch:'full'},
  {path:'login',component:UserloginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'userdash',component:UserdashboardComponent},
  {path:'emical',component:EmicalculatorComponent},
  {path:'vehicleloan',component:VehicleloanComponent},
  {path:'pending',component:PendingapplicationsComponent},
  {path:'viewall',component:ViewClientsComponent},
  {path:'reject',component:RejectedlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
