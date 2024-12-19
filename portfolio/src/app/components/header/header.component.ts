import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LanguageSwitcherComponent } from '../../shared/components/language-switcher/language-switcher.component';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';
import { NavMenuComponent } from '@app/shared/components/nav-menu/nav-menu.component';

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
    NavMenuComponent,
  ],
})
export class HeaderComponent {}
