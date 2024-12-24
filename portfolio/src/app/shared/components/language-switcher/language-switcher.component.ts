import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [PopoverModule, ButtonModule, CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  @ViewChild('op') op!: Popover;

  selectedLanguage: Language = {
    code: 'pt',
    name: 'Português',
    flag: 'assets/images/flag/brasil.png',
  };

  languages: Language[] = [
    {
      code: 'pt',
      name: 'Português',
      flag: 'assets/images/flag/brasil.png',
    },
    {
      code: 'en',
      name: 'English',
      flag: 'assets/images/flag/eua.png',
    },
    {
      code: 'es',
      name: 'Español',
      flag: 'assets/images/flag/spain.png',
    },
  ];

  toggle(event: Event) {
    if (this.op) {
      this.op.toggle(event);
    }
  }

  selectLanguage(language: Language) {
    this.selectedLanguage = language;
    if (this.op) {
      this.op.hide();
    }
  }
}
