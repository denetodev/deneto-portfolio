import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { OfficesComponent } from './offices/offices.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HomeComponent,
    OfficesComponent,
    ProjectsComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingPageComponent implements OnInit {
  ngOnInit() {}
}
