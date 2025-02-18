// project-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProjectService } from '../../shared/services/project.service'; // Importe o service
import { Project } from '../../shared/interfaces/project.interface'; // Importe a interface
import { ProjectButtonsComponent } from '@app/shared/components/project-buttons/project-buttons.component';
import { HeaderComponent } from '../landingpage/header/header.component';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Highlight {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TagModule,
    ProjectButtonsComponent,
    HeaderComponent,
  ],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  articles: Article[] = [
    {
      id: 1,
      title: 'Desenvolvimento Backend',
      description:
        'Utilizando Java com Spring Boot e PostgreSQL, desenvolvo backends robustos e eficientes para aplicações modernas.',
      image: '../../../assets/images/projects-page/desenvBack.png',
    },
    {
      id: 2,
      title: 'Top 10 Languages of 2022',
      description: 'Most popular programming languages',
      image: '../../../assets/images/projects-page/desenvBack.png',
    },
    {
      id: 3,
      title: 'The Growth of Gaming',
      description: 'Gaming industry insights and trends',
      image: '../../../assets/images/projects-page/desenvBack.png',
    },
  ];

  highlights: Highlight[] = [
    {
      id: '01',
      title: 'Criando APIs escaláveis e seguras',
      description:
        'Utilizando Java com Spring Boot e PostgreSQL, desenvolvo backends robustos e eficientes para aplicações modernas.',
      image: '../../../assets/images/projects-page/desenvBack.png',
    },
    {
      id: '02',
      title: 'Interfaces dinâmicas e responsivas',
      description:
        'Com Angular e PrimeNG, desenvolvo experiências fluidas e intuitivas para aplicações web.',
      image: '../../../assets/images/projects-page/desenvFront.jpg',
    },
    {
      id: '03',
      title: 'Gerenciando soluções completas',
      description:
        'Exploro o poder do WordPress com Elementor e WooCommerce para criar plataformas versáteis e de alto desempenho.',
      image: '../../../assets/images/projects-page/desenvSaas.jpg',
    },
  ];

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjectsSmall().subscribe({
      next: (projects) => {
        this.projects = projects.reverse();
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
      },
    });
  }

  getProjectClass(project: Project): string {
    const index = this.projects.indexOf(project);
    if (index % 7 === 0) return 'big';
    if (index % 5 === 0) return 'wide';
    if (index % 3 === 0) return 'tall';
    return '';
  }
}
