import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';
import { ProceduresRoutingModule } from './procedures-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProcedureDetailsComponent } from './procedure-details/procedure-details.component';




@NgModule({
  declarations: [
    ProceduresBoardComponent,
    ProcedureDetailsComponent
  ],
  imports: [
    CommonModule,
    ProceduresRoutingModule,
    SharedModule
  ]
})
export class ProceduresModule { }
