import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login-components/login/login.component';
import { DashboardComponent } from './admin/login-components/dashboard/dashboard.component';
import { RegisterComponent } from './admin/login-components/register/register.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { LandingPageComponent } from './pages/landingpage/landingpage.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/landingpage/blog/blog.component').then(
        (m) => m.BlogComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/landingpage/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'offices',
    loadComponent: () =>
      import('./pages/landingpage/offices/offices.component').then(
        (m) => m.OfficesComponent
      ),
  },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
