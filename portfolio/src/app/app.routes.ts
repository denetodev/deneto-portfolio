import { Routes } from '@angular/router';
import { LoginComponent } from './login-components/login/login.component';
import { DashboardComponent } from './login-components/dashboard/dashboard.component';
import { RegisterComponent } from './login-components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
];
