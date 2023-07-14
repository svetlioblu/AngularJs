import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';


//1.add user related routs
const routes: Routes = [
    { path: 'login', canActivate: [AuthActivate], component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
// 2. change class related name and import in related module user.module.ts + app.module.ts + add RouterModule in core.module.ts(parent)
export class UserRoutingModule { }