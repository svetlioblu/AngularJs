import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent {
  theme: Theme | undefined
  //use ActivatedRoute to take the i fro mthe router
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId']
    
    this.apiService.getOneTheme(id).subscribe(theme => {
      this.theme = theme
    })
  }
}
