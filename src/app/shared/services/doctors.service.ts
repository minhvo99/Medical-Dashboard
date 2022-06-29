import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

import { Doctor } from '../models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private doctors: BehaviorSubject<Doctor[] | null>  = new BehaviorSubject<Doctor[] | null>(null)
  public doctors$: Observable<Doctor[] | null> = this.doctors.asObservable();

  URL: string = `https://62a94c183b3143855430ce3c.mockapi.io/dashboard/doctors`

  constructor(private http: HttpClient) { }

  handleError(err: any){
    if(err.error instanceof Error){
      console.log(`Clien-side error: ${err.error.message}`);
      
    }else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
      
    }
  }

  getListDoctor () : Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.URL).pipe(catchError((err) => throwError(() => new Error(err))), map((data) => {
      this.doctors.next(data as Doctor[])
      return data
    }))
  }

  addDoctor(doctor : Doctor) : Observable<any>{
    return this.http.post<Doctor[]>(this.URL, doctor)
  }
  editDoctor(id: any){
    const URLs = `${this.URL}/${id}`
    return this.http.put<Doctor>(URLs, this.doctors ).pipe(catchError((err)=>throwError(()=>new Error(err))),map((data)=>{
      this.doctors.next(data as Doctor[])
    }))
  }
  deleteDoctor(id: any){
    const URLs = `${this.URL}/${id}`
    return this.http.delete<Doctor>(URLs)
  }
}
