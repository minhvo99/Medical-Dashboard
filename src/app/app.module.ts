import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentPatientsListComponent } from './pages/dashboard/appointment-patients-list/appointment-patients-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CallsComponent } from './pages/calls/calls.component';
import { ChartBarComponent } from './pages/dashboard/chart-bar/chart-bar.component';
import { ChartComponent } from './pages/dashboard/chart/chart.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { InnerMsgDirective } from './shared/directive/inner-msg.directive';
import { ListAppointmentComponent } from './pages/appointment/list-appointment/list-appointment.component';
import { NewAppointmentComponent } from './pages/appointment/new-appointment/new-appointment.component';
import { NewDoctorComponent } from './pages/doctor/new-doctor/new-doctor.component';
import { NgModule } from '@angular/core';
import { PatientsComponent } from './pages/patients/patients.component';
import { PrimeNgModule } from './primeNG/primeng.module';
import { ShareModule } from './shared/share.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TopDoctorListComponent } from './pages/dashboard/top-doctor-list/top-doctor-list.component';
import { EditDocTorComponent } from './pages/doctor/edit-doc-tor/edit-doc-tor.component';

//firebase

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppointmentComponent,
    DoctorComponent,
    DepartmentsComponent,
    PatientsComponent,
    ChatsComponent,
    CallsComponent,
    NewDoctorComponent,
    InnerMsgDirective,
    ChartComponent,
    ChartBarComponent,
    ListAppointmentComponent,
    NewAppointmentComponent,
    AppointmentPatientsListComponent,
    TopDoctorListComponent,
    EditDocTorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SvgIconsModule,
    ShareModule,
    FormsModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
