import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContactRequest } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private collectionName = 'contact-requests';

  constructor(private firestore: Firestore) {}

  submitContactRequest(email: string): Observable<any> {
    const request: ContactRequest = {
      email,
      requestDate: new Date(),
      status: 'pending',
      source: 'homepage',
    };

    const contactCollection = collection(this.firestore, this.collectionName);

    return from(addDoc(contactCollection, request)).pipe(
      map(() => ({
        success: true,
        message: 'Solicitação enviada com sucesso!',
      })),
      catchError((error) => {
        console.error('Error submitting contact request:', error);
        return throwError(() => ({
          success: false,
          message: 'Erro ao enviar solicitação. Tente novamente.',
        }));
      })
    );
  }
}
