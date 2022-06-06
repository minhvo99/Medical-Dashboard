import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { PrimeNGConfig } from 'primeng/api';

interface Department {
  name: string;
  code: string;
}

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss'],
})
export class NewDoctorComponent implements OnInit {
  department!: Department[];

  selectedDepartment!: Department;

  txtName!: string;
  txtDepartment!: string;
  txtPosition!: string;
  txtPhone!: string;
  txtEmail!: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private el: ElementRef
  ) {
    this.department = [
      { name: 'MBBS, M.D of Medicine', code: 'NY' },
      { name: 'MBBS, M.D of Medicine', code: 'NY' },
      { name: 'MBBS, M.D of Medicine', code: 'NY' },
      { name: 'MBBS, M.D of Medicine', code: 'NY' },
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
  };

  public msgKeys = {
    required: 'Please input data',
    minlength: 'min length',
    maxlength: 'max length',
    pattern: 'sai roi con cho',
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
      [me.controlNames.department]: ['', [Validators.required]],
      [me.controlNames.position]: ['', [Validators.required]],
      [me.controlNames.phone]: ['',[Validators.required,Validators.pattern('[- +()0-9]+'),Validators.maxLength(11)]],
      [me.controlNames.email]: ['', [Validators.required, Validators.email]],
    });
  }

  public onSubmitFormGroup() {
    const me = this;
    me.myForm.markAsDirty();
    me.myForm.markAllAsTouched();
    me.myForm.updateValueAndValidity();
    Object.keys(me.myForm.controls).map((controlName) => {
      const control = me.myForm.get(controlName);
      control?.markAsDirty();
      control?.markAllAsTouched();
      control?.updateValueAndValidity();
    });
    me.focusElementInvalid();
  }
  private focusElementInvalid() {
    // const invalidInputControl = me.el.nativeElement.querySelectorAll('input.ng-invalid');

    // if(invalidInputControl){
    //   invalidInputControl.focus();
    // }
    const me = this;
    const listEl = document.querySelectorAll('.inpur-ng-invalid');
    for (let i = 0; i < listEl.length; i++) {
      (listEl.item(i) as HTMLElement)?.focus();
      return;
    }
  }

  //

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
}
