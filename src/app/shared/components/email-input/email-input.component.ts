import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
})
export class EmailInputComponent {
  emailValue: string = '';
  @Output() submitEmail = new EventEmitter<string>();

  private readonly DESTINATION_EMAIL = 'deneto.dev@gmail.com';

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.emailValue);
  }

  onSubmit() {
    if (this.isValidEmail()) {
      // Emite o evento com o email digitado
      this.submitEmail.emit(this.emailValue);

      // Prepara o mailto link
      const mailtoLink = this.createMailtoLink();

      // Abre o cliente de email
      window.location.href = mailtoLink;
    }
  }

  private createMailtoLink(): string {
    const subject = encodeURIComponent('Contato via Website');
    const body = encodeURIComponent(
      `Olá! Gostaria de conversar sobre um projeto.\n\nMeu email para contato: ${this.emailValue}`
    );

    return `mailto:${this.DESTINATION_EMAIL}?subject=${subject}&body=${body}`;
  }
}
