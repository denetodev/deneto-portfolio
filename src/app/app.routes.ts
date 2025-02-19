import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login-components/login/login.component';
import { DashboardComponent } from './admin/login-components/dashboard/dashboard.component';
import { RegisterComponent } from './admin/login-components/register/register.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { LandingPageComponent } from './pages/landingpage/landingpage.component';
import { BlogComponent } from './pages/landingpage/blog/blog.component';
import { ProjectsComponent } from './pages/landingpage/projects/projects.component';
import { LinksPageComponent } from './pages/links-page/links-page.component';
import { HomeComponent } from './pages/landingpage/home/home.component';
import { OfficesComponent } from './pages/landingpage/offices/offices.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Rota principal

  // Rota dentro da LandingPage
  { path: 'home', component: HomeComponent },
  { path: 'offices', component: OfficesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },

  // Rotas entre páginas
  { path: 'links-page', component: LinksPageComponent },
  { path: 'blog-page', component: BlogPageComponent },
  { path: 'project-page', component: ProjectPageComponent },
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
  { path: '**', redirectTo: '' }, // Redireciona para a página principal se a rota não for encontrada
];
