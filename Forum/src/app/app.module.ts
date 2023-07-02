import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [AppComponent, MainComponent, TeamsListComponent, PostsListComponent],
  //Import the core module
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
