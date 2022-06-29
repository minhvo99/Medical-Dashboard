import { Component, OnDestroy, OnInit } from "@angular/core";
import { MenuItem, MessageService, PrimeNGConfig } from "primeng/api";

import { Doctor } from "src/app/shared/models/doctor.model";
import { DoctorsService } from "src/app/shared/services/doctors.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  providers: [MessageService],
})
export class DoctorComponent implements OnInit, OnDestroy {
  doctors: Doctor[] = [];
  public subscriptions!: Subscription;
  items!: MenuItem[];

  constructor(
    private doctorServices: DoctorsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const me = this;
    me.getAllDoctor();
    // this.primengConfig.ripple = true;

    // this.items = [
    //   {
    //     items: [
    //       {
    //         label: "Update",
    //         icon: "pi pi-refresh",
    //         command: () => {
    //           this.update();
    //         },
    //       },
    //       {
    //         label: "Delete",
    //         icon: "pi pi-times",
    //         command: () => {
    //           this.deleteDoctor(17);
    //         },
    //       },
    //     ],
    //   },
    // ];
    // me.subscriptions = me.doctorServices.getListDoctor().subscribe(data => {
    //   me.doctors = data
    // },
    // (err) => {
    //   this.doctorServices.handleError(err);
    // })
  }

  getAllDoctor() {
    this.subscriptions = this.doctorServices.getListDoctor().subscribe(
      (data) => {
        this.doctors = data;
      },
      (err) => {
        this.doctorServices.handleError(err);
      }
    );
  }
  deleteDoctor(id: any) {
    const me = this
    me.subscriptions = me.doctorServices.deleteDoctor(id).subscribe(
      (data) => {
        let index = me.getIndex(data.id);
        me.doctors.splice(index, 1);
        if(me.doctors != data){
          me.messageService.add({severity:'success', summary: 'Thông báo', detail: 'Xóa thành công!!!'});
        } else {
          me.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa thất bại !!!'})
        }
      },
      (err) => {
        this.doctorServices.handleError(err);
      }
    );
  }

  onAddDoctor(doctor: Doctor) {
    const me = this;
    me.doctorServices.addDoctor(doctor).subscribe((data) => {
      me.doctors.push(data);
      if(me.doctors != data){
        me.messageService.add({severity:'success', summary: 'Success', detail: 'Thêm thành công!!!'});
      } else {
        me.messageService.add({severity:'error', summary:'Error', detail:'Thêm thất bại !!!'})
      }
    });
  }

  getIndex(id: any): any {
    let result = 0;
    this.doctors.forEach((item, index) => {
      if (item.id == id) {
        result = index;
      }
    });
    return result;
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
