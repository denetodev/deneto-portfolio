import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  changeLanguage(language: string): void {
    console.log(`Idioma selecionado: ${language}`);
    // Aqui você pode adicionar lógica para trocar o idioma.
  }
}
