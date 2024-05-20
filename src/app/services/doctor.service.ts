import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.apiUrl;
const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
                    


  constructor(
    private http: HttpClient
  ) { }


  createProfile(doctor:any) {
    const url = `${baseUrl}/doctor/store`;
    return this.http.post(url, doctor);
  }
  public uploadfile(file: File) {
    let formParams = new FormData();
    const url = `${baseUrl}/doctor/upload`;
    formParams.append('file', file)
    return this.http.post(url, formParams)
  }

  get headers(){
    
    return headers
  }

  

}
