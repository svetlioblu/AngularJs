import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  //Import the core module
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
