import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './pages/appointment/appointment.component';
import { CallsComponent } from './pages/calls/calls.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { NewAppointmentComponent } from './pages/appointment/new-appointment/new-appointment.component';
import { NgModule } from '@angular/core';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'appointment',component: AppointmentComponent,},
  {path: 'new-appointment',component: NewAppointmentComponent},
  { path: 'doctors',component: DoctorComponent,},
  {path: 'departments', component: DepartmentsComponent,},
  {path: 'patients',component: PatientsComponent,},
  {path: 'chast',component: ChatsComponent,},
  {path: 'calls',component: CallsComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
