import { Component } from '@angular/core';
import { CarouselProjectsComponent } from '@app/shared/components/carousel-projects/carousel-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
