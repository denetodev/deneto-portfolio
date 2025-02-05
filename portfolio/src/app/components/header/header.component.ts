import { Component, OnInit } from '@angular/core';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';

import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ScrollService } from '@app/shared/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    LanguageSwitcherComponent,
    ContactButtonComponent,

    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
  ],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Sobre',
        command: () => this.scrollToSection('sobre'),
      },
      {
        label: 'Serviços',
        command: () => this.scrollToSection('servicos'),
      },
      {
        label: 'Projetos',
        command: () => this.scrollToSection('projetos'),
      },
      {
        label: 'Blog',
        command: () => this.scrollToSection('blog'),
      },
    ];
  }

  private scrollToSection(sectionId: string): void {
    // Primeiro, garantimos que estamos na página inicial
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Após a navegação, esperamos um tick para garantir que o DOM foi atualizado
        setTimeout(() => {
          this.scrollService.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollService.scrollToElement(sectionId);
    }
  }

  navigateToLandingpage() {
    this.router.navigate(['/**']);
  }
}
