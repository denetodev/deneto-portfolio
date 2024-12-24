import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login-components/login/login.component';
import { DashboardComponent } from './admin/login-components/dashboard/dashboard.component';
import { RegisterComponent } from './admin/login-components/register/register.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { LandingPageComponent } from './pages/landingpage/landingpage.component';

export const routes: Routes = [
  // Página inicial
  { path: '', component: LandingPageComponent },

  // Páginas acessíveis a partir da LandingPage
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
    path: 'links',
    loadComponent: () =>
      import('./pages/links-page/links-page.component').then(
        (m) => m.LinksPageComponent
      ),
  },

  // Rotas para o Admin
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

  // Fallback para rotas inexistentes
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
