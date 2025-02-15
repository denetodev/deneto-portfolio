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
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
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
