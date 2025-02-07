import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Project } from '@app/shared/interfaces/project.interface';
import { ProjectService } from '@app/shared/services/project.service';

@Component({
  selector: 'app-link-page-test',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
    AvatarModule,
  ],
  templateUrl: './link-page-test.component.html',
  styleUrl: './link-page-test.component.scss',
})
export class LinkPageTestComponent {
  services = [
    {
      title: 'Design Gráfico',
      description:
        'Criação de identidade visual exclusiva. Design de materiais de marketing, portfólios, cartões de visita e banners.',
      icon: 'pi pi-palette',
    },
    {
      title: 'Design de Sites',
      description:
        'Criação de websites atraentes e funcionais. Garantia de site otimizado para dispositivos móveis.',
      icon: 'pi pi-desktop',
    },
  ];

  private projectService = inject(ProjectService);
  projects: Project[] = [];

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

  socialLinks = [
    { icon: 'pi pi-instagram', link: '#' },
    { icon: 'pi pi-whatsapp', link: '#' },
    { icon: 'pi pi-telegram', link: '#' },
    { icon: 'pi pi-envelope', link: '#' },
  ];

  ngOnInit() {
    this.projectService
      .getProjectsSmall()
      .subscribe((projects: Project[]) => (this.projects = projects));
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
