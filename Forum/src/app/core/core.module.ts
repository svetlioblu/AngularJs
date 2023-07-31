import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, ErrorComponent],
  //add RouterModule
  imports: [CommonModule, RouterModule],
  //Which components to be exported from this module
  exports: [HeaderComponent, FooterComponent, NotFoundComponent],
})
export class CoreModule { }
