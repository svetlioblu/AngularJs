import { Injectable } from '@angular/core';
//import HttpClient module and environments
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // add HttpClient in the constructor
  constructor(private http: HttpClient) { }
  //THEMES

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
  getOneTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const url = '/api/themes';

    return this.http.post<Theme>(url, { themeName, postText });
  }

  //POSTS

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }

}
