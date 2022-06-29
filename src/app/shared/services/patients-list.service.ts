import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { PatientsList } from 'src/app/pages/dashboard/appointment-patients-list/patients-list';
import { Patients } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsListService {

  constructor(private http : HttpClient) { }

  URL: string = `https://62a94c183b3143855430ce3c.mockapi.io/dashboard/list-patients`

  public patients :  BehaviorSubject<Patients[] | null>  = new BehaviorSubject<Patients[] | null>(null)

  getPatientsList(): Observable<any>{
    return this.http.get<PatientsList[]>(this.URL).pipe(catchError((err) => throwError(() => new Error(err))), map((data) => {
      this.patients.next(data as Patients[])
      return data
    }))
  }
}
