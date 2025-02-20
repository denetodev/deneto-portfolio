import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NewsletterSubscription } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private collectionName = 'newsletter-subscriptions';

  constructor(private firestore: Firestore) {}

  async checkIfEmailExists(email: string): Promise<boolean> {
    const newsletterCollection = collection(
      this.firestore,
      this.collectionName
    );
    const q = query(newsletterCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }

  subscribe(email: string): Observable<any> {
    return from(this.checkIfEmailExists(email)).pipe(
      map(async (exists) => {
        if (exists) {
          throw new Error('Este e-mail já está cadastrado na newsletter.');
        }

        const subscription: NewsletterSubscription = {
          email,
          subscriptionDate: new Date(),
          status: 'active',
        };

        const newsletterCollection = collection(
          this.firestore,
          this.collectionName
        );
        return await addDoc(newsletterCollection, subscription);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
