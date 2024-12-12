import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface AppUser {
  uid: string;
  email: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: AppUser | null = null;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = null;
        localStorage.removeItem('user');
      }
    });
  }

  async login(email: string, password: string) {
    try {
      const result = await this.fireauth.signInWithEmailAndPassword(
        email,
        password
      );
      if (result.user) {
        this.router.navigate(['/admin/dashboard']);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  }

  async register(email: string, password: string) {
    try {
      await this.fireauth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/admin/dashboard']);
    } catch (error) {
      console.error('Erro ao registrar:', error);
      this.router.navigate(['/admin/login']);
    }
  }

  async logout() {
    try {
      await this.fireauth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/admin/login']);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
