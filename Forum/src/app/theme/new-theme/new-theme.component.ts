import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService) { }

  postThemeHandler(event: Event, themeName: string, postText: string) {
    event.preventDefault()
    console.log(themeName, postText);
    this.apiService.postTheme({ themeName, postText }).subscribe(
      data => {
        console.log('Response:', data);
        // Handle the response as needed
      },
      error => {
        console.error('Error:', error);
        // Handle the error as needed
      }
    )
  }
}
