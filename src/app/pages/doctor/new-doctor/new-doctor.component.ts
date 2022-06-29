import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { Doctor } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss'],
  providers: [MessageService]
})
export class NewDoctorComponent implements OnInit , OnDestroy{
  @Output() addDoctor = new EventEmitter<Doctor>()
  department!: any;
  positions!: any;

  selectedDepartment!: any;
  stateOptions!: any[];
  state: string = 'off';
  doctor = ''
  doctors! : Doctor[] 

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
  ) {
    this.positions = [
      {}
    ]
    this.department = [
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
      { label: 'MBBS, M.D of Medicine', value: 'MBBS, M.D of Medicine' },
    ];
    this.stateOptions = [
      { label: 'Online', value: 'online' },
      { label: 'Offline', value: 'offline' },
    ];
  }
  //validate form
 myForm!: FormGroup;

  public controlNames = {
    username: 'username',
    department: 'department',
    position: 'position',
    email: 'email',
    phone: 'phone',
    groups: 'groups',
    image: 'image',
    status : 'status'
  };

  public msgKeys = {
    required: 'Please input data',
    minlength: 'min length',
    maxlength: 'max length',
    pattern: 'khong dung dinh dang',
  };

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    const me = this;
    me.initForm();
  }
  private initForm() {
    const me = this;
    me.myForm = me.formBuilder.group({
      [me.controlNames.username]: ['',[Validators.required, Validators.minLength(4)]],
      [me.controlNames.status]:['',[]],
      [me.controlNames.department]:['',[]],
      [me.controlNames.position]:['',[]],
      [me.controlNames.phone]: ['',[Validators.required,Validators.pattern('[- +()0-9]+'),Validators.maxLength(11)]],
      [me.controlNames.email]: ['', [Validators.required, Validators.email]],
    });
  }

  onChangedPosition(event: any) {
    const me = this;
  }

  public onSubmitFormGroup() {
    const me = this;
    const doctor = me.myForm.getRawValue() as Doctor;
    const valid = me.myForm.valid;
    me.myForm.markAsDirty();
    me.myForm.markAllAsTouched();
    me.myForm.updateValueAndValidity();
    Object.keys(me.myForm.controls).map((controlName) => {
      const control = me.myForm.get(controlName);
      control?.markAsDirty();
      control?.markAllAsTouched();
      control?.updateValueAndValidity();
    });
    
    if(!valid){
      return me.focusElementInvalid();
    }
    
    me.focusElementInvalid();
    me.addDoctor.emit(doctor)
    me.onClearForm()
  }
  private focusElementInvalid() {
    // const invalidInputControl = me.el.nativeElement.querySelectorAll('.input-ng-invalid');
    //console.log(invalidInputControl);
    // if(invalidInputControl){
    //   invalidInputControl.focus();
    // }
    const me = this;
    const listEl = document.querySelectorAll('.input-ng-invalid');
    for (let i = 0; i < listEl.length; i++) {
      (listEl.item(i) as HTMLElement)?.focus();
      return;
    }
  }

  onClearForm(){
    if(this.myForm.value){
      this.myForm.reset()
      this.displayModal = false
    }
  }

  displayModal!: boolean;

  displayPosition!: boolean;

  position!: string;

  showModalDialog() {
    this.displayModal = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
  ngOnDestroy(): void {
    
  }
}
