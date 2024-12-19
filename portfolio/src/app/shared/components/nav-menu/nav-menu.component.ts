import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [MenubarModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
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
