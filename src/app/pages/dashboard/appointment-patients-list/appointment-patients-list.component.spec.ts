import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPatientsListComponent } from './appointment-patients-list.component';

describe('AppointmentPatientsListComponent', () => {
  let component: AppointmentPatientsListComponent;
  let fixture: ComponentFixture<AppointmentPatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentPatientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
