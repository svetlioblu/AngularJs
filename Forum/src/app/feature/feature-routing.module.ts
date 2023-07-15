import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { MainComponent } from '../main/main.component';
import { CurrentThemeComponent } from '../theme/current-theme/current-theme.component';
import { NewThemeComponent } from '../theme/new-theme/new-theme.component';
import { AuthActivate } from '../core/guards/auth.activate';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'themes',
    children: [
        { path: '', pathMatch: 'full', component: MainComponent },
        { path: ':themeId', component: CurrentThemeComponent }
    ]
},
{ path: 'add-theme',canActivate: [AuthActivate], component: NewThemeComponent }

  // Other child routes within the feature module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
