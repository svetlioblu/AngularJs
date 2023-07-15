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
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { ThemeModule } from './theme/theme.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeamsListComponent,
    PostsListComponent,
    HomeComponent,
    WelcomeComponent,
  ],
  //Import the core and http module
  imports: [BrowserModule, CoreModule, HttpClientModule,
    SharedModule, AppRoutingModule, UserRoutingModule, ThemeModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
