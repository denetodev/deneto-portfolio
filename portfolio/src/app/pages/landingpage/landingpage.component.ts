import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '@app/shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LanguageSwitcherComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingPageComponent {}
