import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  //add RouterModule
  imports: [CommonModule,RouterModule],
  //Which components to be exported from this module
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
