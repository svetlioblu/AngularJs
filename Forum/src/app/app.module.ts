import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
// import http module
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeamsListComponent,
    PostsListComponent,
  ],
  //Import the core and http module
  imports: [BrowserModule, CoreModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
