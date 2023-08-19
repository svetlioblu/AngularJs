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

  createProcedure(label:string, description:string, therapist:string, price:number, img:string) {
    const { apiUrl } = environment;

    return this.http.post<Procedure>(`${apiUrl}/procedures/add`, { label, description, therapist, price, img });
  }

  deleteProcedure(id: string) {
    const { apiUrl } = environment;
    return this.http.delete<Procedure>(`${apiUrl}/procedures/${id}`);
  }

}
