import { Component, OnInit } from '@angular/core';

import { Cabinets } from './new-appointment/models/cabinets.app';
import { Router } from '@angular/router';
import { Status } from './new-appointment/models/status.app';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    status!: Status[];

    selectedStatus!: Status;

    cabinets!: Cabinets[]
    
    selectdCabinets! : Cabinets


    constructor(private router: Router) {
        this.status = [];

    }
    ngOnInit(): void {
      
    }
    newAppoint(): void {
      this.router.navigate(['appointment','new-appointment']);
    }

}
