import { Injectable } from '@angular/core';
import { Type } from '../models/type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  public type: Type;
      // public role: Role;
      error:string;
    
      constructor(
        private http: HttpClient,
        private router: Router,
        ) {
      }
    
    
    
     
      getTypes() {
        const url = `${baseUrl}/types`;
        return this.http.get(url).pipe(map((types: Type) => types));
      }
      // getRecientes() {
      //   const url = `${baseUrl}/type/recientes`;
      //   return this.http.get<any>(url,this.headers)
      //     .pipe(
      //       map((resp:{ok: boolean, types: Type}) => resp.types)
      //     )
      // }
    
      // getType(type: any) {
      //   const url = `${baseUrl}/type/show/${type}`;
      //   return this.http.get<any>(url, this.headers)
      //     .pipe(
      //       map((resp:{ok: boolean, type: Type}) => resp.type)
      //       );
      // }
    
    
}
