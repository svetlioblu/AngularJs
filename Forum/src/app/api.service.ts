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
    const { appUrl } = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }
  getOneTheme(id: string) {
    const { appUrl } = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${id}`);
  }
  getPosts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`);
  }
  postTheme(data: any) {
    const url = '/themes';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Theme>(url, data, { headers });
  }

}
