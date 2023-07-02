import { Injectable } from '@angular/core';
//import HttpClient module
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // add HttpClient in the constructor
  constructor(private http: HttpClient) {}

  getThemes(){}
  getPosts(){}

}
