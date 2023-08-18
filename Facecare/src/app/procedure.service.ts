import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment.development';
import { Procedure } from './types/procedure';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http:HttpClient) { }

  getProcedures() {
    const { apiUrl } = environment
    return this.http.get<Procedure[]>(`${apiUrl}/procedures`)
  }

  getDetails(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Procedure>(`${apiUrl}/procedures/${id}`);
  }
}
