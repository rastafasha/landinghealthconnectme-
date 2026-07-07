import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public doctor: Doctor;

  private filteredDoctorsSubject = new BehaviorSubject<Doctor[]>([]);
  public filteredDoctors$: Observable<Doctor[]> = this.filteredDoctorsSubject.asObservable();

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  createDoctor(doctor: Doctor) {
    const url = `${baseUrl}/doctors/store`;
    return this.http.post(url, doctor, this.headers);
  }

}
