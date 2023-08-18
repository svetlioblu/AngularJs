import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';
import { ProceduresRoutingModule } from './procedures-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProcedureDetailsComponent } from './procedure-details/procedure-details.component';
import { ProcedureNewComponent } from './procedure-new/procedure-new.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProceduresBoardComponent,
    ProcedureDetailsComponent,
    ProcedureNewComponent
  ],
  imports: [
    CommonModule,
    ProceduresRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProceduresModule { }
