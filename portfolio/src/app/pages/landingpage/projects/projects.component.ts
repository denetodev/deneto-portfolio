import { Component } from '@angular/core';
import { CarouselProjectsComponent } from '@app/shared/components/carousel-projects/carousel-projects.component';
import { VerMaisButtonComponent } from '@app/shared/components/ver-mais-button/ver-mais-button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselProjectsComponent, VerMaisButtonComponent, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
