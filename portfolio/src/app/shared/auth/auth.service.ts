import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { isPlatformBrowser } from '@angular/common';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';

interface AppUser {
  uid: string;
  email: string | null;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private router = inject(Router);

  private user: AppUser | null = null;
  private platformId = inject(PLATFORM_ID);

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
          if (userDoc.exists()) {
            this.user = {
              uid: user.uid,
              email: user.email,
              role: userDoc.data()['role'],
            };
            this.setLocalStorageItem('user', JSON.stringify(this.user));
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
          // Optionally clear the local storage if there's an error
          this.removeLocalStorageItem('user');
        }
      } else {
        this.user = null;
        this.removeLocalStorageItem('user');
      }
    });
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error('Error setting localStorage item:', error);
      }
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing localStorage item:', error);
      }
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(
        this.auth,
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
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (result.user) {
        await setDoc(doc(this.firestore, 'users', result.user.uid), {
          email,
          role: 'pending',
        });
        this.router.navigate(['/admin/login']);
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      localStorage.removeItem('user');
      this.router.navigate(['/admin/login']);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      return user !== null && user !== undefined;
    }
    return false;
  }

  async getUserRole(uid: string): Promise<string | null> {
    const userDoc = await getDoc(doc(this.firestore, 'users', uid));
    return userDoc.exists() ? userDoc.data()['role'] : null;
  }

  async approveUser(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    await updateDoc(userRef, { role: 'admin' });
  }

  getCurrentUser() {
    if (isPlatformBrowser(this.platformId)) {
      return this.auth.currentUser;
    }
    return null;
  }
}
