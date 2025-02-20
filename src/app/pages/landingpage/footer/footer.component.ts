import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuModule } from 'primeng/menu';
import { ScrollService } from '@app/shared/services/scroll.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NewsletterService } from '../../../shared/services/newsletter.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactButtonComponent,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,

    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  newsletterForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private fb: FormBuilder,
    private newsletterService: NewsletterService,
    private messageService: MessageService
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmitNewsletter(): void {
    if (this.newsletterForm.valid && !this.loading) {
      this.loading = true;
      const email = this.newsletterForm.get('email')?.value;

      this.newsletterService.subscribe(email).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Obrigado por se inscrever em nossa newsletter!',
          });
          this.newsletterForm.reset();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail:
              error.message ||
              'Não foi possível realizar a inscrição. Tente novamente.',
          });
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  scrollToSection(sectionId: string): void {
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

  navigateToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
