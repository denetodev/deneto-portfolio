import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { ProjectButtonsComponent } from '../project-buttons/project-buttons.component';

@Component({
  selector: 'app-carousel-projects',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CarouselModule,
    ProjectButtonsComponent,
    Tag,
  ],
  templateUrl: './carousel-projects.component.html',
  styleUrls: ['./carousel-projects.component.scss'],
})
export class CarouselProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading = true;

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjectsSmall().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar projetos:', error);
        this.loading = false;
      },
    });
  }
}
