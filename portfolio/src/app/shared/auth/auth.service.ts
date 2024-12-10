import { Inject, Injectable } from '@angular/core';
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

  constructor(
    @Inject(AngularFireAuth) private fireauth: AngularFireAuth,
    private router: Router
  ) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          email: user.email,
        };
      } else {
        this.user = null;
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.fireauth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error(error);
      this.router.navigate(['/login']);
    }
  }

  async register(email: string, password: string) {
    try {
      await this.fireauth.createUserWithEmailAndPassword(email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error(error);
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    try {
      await this.fireauth.signOut();
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }
}
