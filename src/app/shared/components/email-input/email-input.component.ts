import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Tooltip } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Tooltip,
    InputTextModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
})
export class EmailInputComponent {
  emailValue: string = '';
  @Output() submitEmail = new EventEmitter<string>();
  loading: boolean = false;

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.emailValue);
  }

  onSubmit() {
    if (!this.isValidEmail() || this.loading) return;

    this.loading = true;

    this.contactService.submitContactRequest(this.emailValue).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Recebemos sua solicitação! Em breve entraremos em contato.',
        });
        this.emailValue = '';
        this.submitEmail.emit(this.emailValue);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: error.message,
        });
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
