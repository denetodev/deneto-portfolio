import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { environment } from '../environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { HttpHeaders, provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff5eb',
      100: '#ffe8d3',
      200: '#ffd1a7',
      300: '#ffb47a',
      400: '#ff8c4d',
      500: '#ff6200', // Sua cor principal
      600: '#e65600',
      700: '#cc4c00',
      800: '#a33d00',
      900: '#7a2e00',
      950: '#4d1d00',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    }),
    provideClientHydration(),
    provideHttpClient(),

    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const headers = new HttpHeaders()
          .set('Authorization', `Bearer ${window.__env?.GITHUB_TOKEN}`)
          .set('Content-Type', 'application/json');

        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api.github.com/graphql',
            headers: headers,
          }),
          defaultOptions: {
            watchQuery: {
              errorPolicy: 'all',
            },
          },
        };
      },
      deps: [HttpLink],
    },
    Apollo,
  ],
};
