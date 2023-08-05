import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceduresBoardComponent } from './procedures-board/procedures-board.component';


const routes: Routes = [
    {
        path: 'procedures',
        children: [
            { path: '', pathMatch: 'full', component: ProceduresBoardComponent },
            // { path: ':themeId', component: CurrentThemeComponent }
        ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProceduresRoutingModule { }
