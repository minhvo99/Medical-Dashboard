import { Component, Input, OnInit } from '@angular/core';

import { DoctorsService } from 'src/app/shared/services/doctors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-doc-tor',
  templateUrl: './edit-doc-tor.component.html',
  styleUrls: ['./edit-doc-tor.component.scss']
})
export class EditDocTorComponent implements OnInit {
  @Input('doctor') doctor: any;
  

  displayModal!: boolean;

  displayPosition!: boolean;

  position!: string;

  stateOptions!: any[];
  state: string = 'off';
  sub! : Subscription
  department!: any;

  showModalDialog() {
    this.displayModal = true;
  }

  editDoctor(id: any){
    this.showModalDialog()
    const me = this;
    me.sub = me.doctorService.editDoctor(id).subscribe((data)=>{
      
    },
      (err) => {
        me.doctorService.handleError(err);
      })
    
  }


  constructor(private doctorService : DoctorsService) { 
    this.stateOptions = [
      { label: 'Online', value: 'online' },
      { label: 'Offline', value: 'offline' },
    ];
    this.department = [
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
    ];
  }

  ngOnInit(): void {
  }

}
