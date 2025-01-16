import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { VerMaisButtonComponent } from '@app/shared/components/ver-mais-button/ver-mais-button.component';
import { BlogPost } from '@app/shared/interfaces/blogPost.interface';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { EmailInputComponent } from '../../../shared/components/email-input/email-input.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule,
    RouterModule,
    VerMaisButtonComponent,
    EmailInputComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  emailValue: string = '';

  blogPosts: BlogPost[] = [
    {
      image: '../../../../assets/images/blog-section/ios-tumb.png',
      title: 'As Tendências Mais Quentes em Desenvolvimento Web para 2024',
      description:
        'Descubra as tecnologias e práticas que estão moldando o futuro da web',
      date: '13 Ago, 2025',
      category: 'Landing Page',
    },
    {
      image: '../../../../assets/images/blog-section/mobile-tumb.png',
      title:
        'Desenvolvimento Mobile: Dicas Essenciais para Criar Apps de Sucesso',
      description:
        'Do design à implementação, tudo o que você precisa saber para desenvolver aplicativos móveis incríveis',
      date: '08 Nov, 2025',
      category: 'E-commerce',
    },
    {
      image: '../../../../assets/images/blog-section/machine-learn-tumb.png',
      title:
        'Como a Inteligência Artificial Está Transformando o Desenvolvimento de Software',
      description:
        'Explorando o impacto da IA no desenvolvimento web e como você pode aproveitar essa tecnologia',
      date: '14 Dez, 2025',
      category: 'I.A.',
    },
  ];
}
