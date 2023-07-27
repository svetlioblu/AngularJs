import { Injectable } from '@angular/core';
//import HttpClient module and environments
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // add HttpClient in the constructor
  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
  getOneTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }
  postTheme(data: any) {
    const url = 'http://localhost:3000/api/themes';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Theme>(url, data, { headers });
  }

}
