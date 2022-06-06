import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListItem } from 'src/app/pages/appointment/list-appointment/list-item';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  constructor(private http: HttpClient) {}
  getListAppoint() {
    return this.http.get<ListItem[]>('../../../assets/data/patients.json');
  }
}
