import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) { }

  getProcedures() {
    const { apiUrl } = environment
    return this.http.get(`${apiUrl}/procedures`)
  }
}
