import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSwitcherComponent } from '@app/shared/components/language-switcher/language-switcher.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent {
  constructor(private router: Router, private dialogService: DialogService) {}

  openLanguageModal(): void {
    this.dialogService.open(LanguageSwitcherComponent, {
      header: 'Escolha o idioma',
      width: '350px',
    });
  }

  goToLinksPage(): void {
    this.router.navigate(['/links-page']);
  }
}
