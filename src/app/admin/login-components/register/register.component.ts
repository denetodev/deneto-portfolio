import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  }

  onSubmit(): void {
    this.errorMessage = ''; // Limpa mensagens de erro anteriores

    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      this.authService
        .register(email, password)
        .then(() => {
          this.router.navigate(['/admin/login']);
        })
        .catch((error) => {
          // Tratamento de erros específicos do Firebase
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.errorMessage = 'This email is already registered.';
              break;
            case 'auth/invalid-email':
              this.errorMessage = 'Invalid email address.';
              break;
            case 'auth/weak-password':
              this.errorMessage = 'Password is too weak.';
              break;
            default:
              this.errorMessage = 'Error creating account. Please try again.';
          }
          console.error('Erro ao criar conta:', error);
        });
    } else {
      // Marca todos os campos como tocados para mostrar validações
      Object.keys(this.registerForm.controls).forEach((field) => {
        const control = this.registerForm.get(field);
        control?.markAsTouched();
      });
    }
  }
}
