import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';
import { ProceduresRoutingModule } from './procedures-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProceduresBoardComponent
  ],
  imports: [
    CommonModule,
    ProceduresRoutingModule,
    SharedModule
  ]
})
export class ProceduresModule { }
