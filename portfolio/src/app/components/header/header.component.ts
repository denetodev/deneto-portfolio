import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
import { ScrollService } from '@app/shared/services/scroll.service';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    LanguageSwitcherComponent,
    ContactButtonComponent,
  ],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  items = [
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

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    this.onWindowScroll();
  }

  private scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
