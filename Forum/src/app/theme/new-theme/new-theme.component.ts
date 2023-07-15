import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService) { }

  postThemeHandler(event: Event, name: string, post: string) {
    event.preventDefault()
    console.log(name, post);
    this.apiService.postTheme({ name, post }).subscribe(
      response => {
        console.log('Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Error:', error);
        // Handle the error as needed
      }
    )
  }
}
