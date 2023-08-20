import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoExistsComponent } from './errors/no-exists/no-exists.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: '',
    loadChildren: () => import('./procedures/procedures.module').then((m) => m.ProceduresModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  }
//  { path: '**', component: NoExistsComponent}
];

@NgModule({
  //todo fix static files from the server side
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
