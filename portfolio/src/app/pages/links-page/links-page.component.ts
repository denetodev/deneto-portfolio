import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { Project } from '../../shared/interfaces/project.interface';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ChipModule,
    DividerModule,
    TabViewModule,
  ],
  templateUrl: './links-page.component.html',
  styleUrl: './links-page.component.scss',
})
export class LinksPageComponent {
  private projectService = inject(ProjectService);
  projects: Project[] = [];
  techStack = [
    'Angular',
    'TypeScript',
    'Firebase',
    'Node.js',
    'PrimeNG',
    'SCSS',
  ];

  featuredProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com sistema de pagamentos integrado',
      image: 'assets/project1.jpg',
      githubUrl: '#',
      siteUrl: '#',
    },

    {
      id: '2',
      title: 'Sistema de Gestão',
      description:
        'Dashboard administrativo para gestão de recursos empresariais',
      image: 'assets/project2.jpg',
      githubUrl: '#',
      siteUrl: '#',
    },
    {
      id: '3',
      title: 'App de Delivery',
      description:
        'Aplicativo mobile para entrega de produtos com rastreamento em tempo real',
      image: 'assets/project3.jpg',
      githubUrl: '#',
      siteUrl: '#',
    },
    {
      id: '4',
      title: 'Rede Social',
      description: 'Rede social para conectar profissionais da área tech',
      image: 'assets/project4.jpg',
      githubUrl: '#',
      siteUrl: '#',
    },
  ];

  ngOnInit() {
    this.projectService
      .getProjectsSmall()
      .subscribe((projects) => (this.projects = projects));
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
