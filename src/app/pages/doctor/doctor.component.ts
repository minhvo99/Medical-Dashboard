import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService, PrimeNGConfig } from "primeng/api";

import { Doctor } from "src/app/shared/models/doctor.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  providers: [MessageService],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  private _url = "../../../assets/data/doctors.json";
  items!: MenuItem[];

  getDoctor(): Observable<Doctor[]> {
    const me = this;
    return me.http.get<Doctor[]>(this._url);
  }

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private http: HttpClient
  ) {
    this.getDoctor().subscribe((data) => {
      this.doctors = data;
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [{
        items: [{
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                this.update();
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                this.delete();
            }
        }
        ]}
    ];
}

update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}
}
