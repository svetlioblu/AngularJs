import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ProceduresModule } from './procedures/procedures.module';
import { AppInterceptorProvider } from './app.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user/user-routing.module';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule, AppRoutingModule, CoreModule,
    ProceduresModule, UserRoutingModule, HttpClientModule,SharedModule],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
