import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';
import { ProceduresRoutingModule } from './procedures-routing.module';



@NgModule({
  declarations: [
    ProceduresBoardComponent
  ],
  imports: [
    CommonModule,
    ProceduresRoutingModule
  ]
})
export class ProceduresModule { }
