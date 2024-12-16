import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    ButtonModule,
    LanguageSwitcherComponent,
    ContactButtonComponent,
    Menubar,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  goToLinksPage(): void {
    this.router.navigate(['/links-page']);
  }

  items: MenuItem[] = [];
  isMenuVisible = true; // Inicialmente visível em telas maiores

  ngOnInit() {
    this.items = [
      {
        label: 'Sobre',
        command: () => this.router.navigate(['/landingpage/home']),
      },
      {
        label: 'Serviços',
        command: () => this.router.navigate(['/landingpage/services']),
      },
      {
        label: 'Projetos',
        command: () => this.router.navigate(['/landingpage/projects']),
      },
      {
        label: 'Blog',
        command: () => this.router.navigate(['/landingpage/blog']),
      },
    ];
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
