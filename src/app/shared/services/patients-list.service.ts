import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientsList } from 'src/app/pages/dashboard/appointment-patients-list/patients-list';

@Injectable({
  providedIn: 'root'
})
export class PatientsListService {

  constructor(private http : HttpClient) { }

  getPatientsList(){
    return this.http.get<PatientsList[]>('../../../assets/data/list-patients.json');
  }
}
