import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';
import { ProcedureDetailsComponent } from './procedure-details/procedure-details.component';
import { ProcedureNewComponent } from './procedure-new/procedure-new.component';


const routes: Routes = [
    {
        path: 'procedures',
        children: [
            { path: '', pathMatch: 'full', component: ProceduresBoardComponent },
            { path: 'add', component: ProcedureNewComponent },
            { path: ':procedureId', component: ProcedureDetailsComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProceduresRoutingModule { }
