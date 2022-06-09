import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) { }

  dashboard: any[] = [
    {lable:'Appointment', icon:'appointment',w:'60px',h:'60px',size:'xxl', indentity:'500'},
    {lable:'Operations', icon:'operation',w:'60px',h:'60px',size:'xxl', indentity:'504'},
    {lable:'New Patients', icon:'newpatients',w:'60px',h:'60px',size:'xxl', indentity:'150'},
    {lable:'Earning', icon:'earning',w:'60px',h:'60px',size:'xxl', indentity:'$20,500'}
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
}

}
