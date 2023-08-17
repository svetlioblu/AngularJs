import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [
    SpinnerComponent,
    SlicePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, SlicePipe]
})
export class SharedModule { }
