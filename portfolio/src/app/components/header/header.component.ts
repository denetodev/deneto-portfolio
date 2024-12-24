import { Component, OnInit } from '@angular/core';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';

import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    LanguageSwitcherComponent,
    ContactButtonComponent,

    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
  ],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Sobre',
        routerLink: '/landingpage/home',
      },
      {
        label: 'Serviços',
        routerLink: '/landingpage/services',
      },
      {
        label: 'Projetos',
        routerLink: '/landingpage/projects',
      },
      {
        label: 'Blog',
        routerLink: '/landingpage/blog',
      },
    ];
  }
}
