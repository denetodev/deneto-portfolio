import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent {
  @Input() variant: 'outlined' | 'text' | undefined; // Tipos permitidos pelo `p-button`
  @Input() severity:
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null
    | undefined; // Tipos permitidos pelo `p-button`

  constructor(private router: Router) {}

  navigateToLinksPage() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/links-page'])
    );
    window.open(url, '_blank');
  }
}
