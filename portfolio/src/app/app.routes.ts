import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login-components/login/login.component';
import { DashboardComponent } from './admin/login-components/dashboard/dashboard.component';
import { RegisterComponent } from './admin/login-components/register/register.component';
import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  {
    path: 'admin',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      // Outras rotas admin protegidas aqui
    ],
  },
];
