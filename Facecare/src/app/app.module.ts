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
import { FormsModule } from '@angular/forms';
import { NoExistsComponent } from './errors/no-exists/no-exists.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NoExistsComponent],
  imports: [
    BrowserModule, AppRoutingModule, CoreModule,
    ProceduresModule, UserRoutingModule, HttpClientModule,SharedModule,FormsModule],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
