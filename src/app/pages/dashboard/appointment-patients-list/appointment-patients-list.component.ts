import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig, } from 'primeng/api';

import { PatientsList } from './patients-list';
import { PatientsListService } from 'src/app/shared/services/patients-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-patients-list',
  templateUrl: './appointment-patients-list.component.html',
  styleUrls: ['./appointment-patients-list.component.scss']
})
export class AppointmentPatientsListComponent implements OnInit, OnDestroy {

  items!: MenuItem[];

  patients : PatientsList[] = []
  subscriptions?: Subscription
  

  constructor(private primengConfig: PrimeNGConfig, 
              private patientsListService : PatientsListService) {}

  menuBar: any[] =[
    {lable: 'No', icon: ''},
    {lable: 'Patients Name', icon: 'arrow-down'},
    {lable: 'Date of admit', icon: 'arrow-down'},
    {lable: 'Disease', icon: 'arrow-down'},
    {lable: 'Room No', icon: 'arrow-down'},
    {lable: 'Action', icon: 'arrow-down'}
  ]

  ngOnInit() {
    
      this.primengConfig.ripple = true;

      this.items = [{
          items: [{
              label: 'Update',
              icon: 'pi pi-refresh',
             
          },
          {
              label: 'Delete',
              icon: 'pi pi-times',
              
          }
          ]}
      ];

      this.subscriptions = this.patientsListService
                .getPatientsList()
                .subscribe((listPatient : any)=> {
        this.patients = listPatient.data

        console.log(listPatient.data);
        
      })
      
      
      
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    const me = this;
    me.subscriptions?.unsubscribe()
  }
}
