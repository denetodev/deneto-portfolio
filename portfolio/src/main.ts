import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { InMemoryCache, ApolloLink, HttpLink } from '@apollo/client/core';
import { provideRouter } from '@angular/router';
import { routes } from '../src/app/app.routes';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideApollo(() => {
      const githubToken = environment.githubToken; // Acesse o token do ambiente

      if (!githubToken) {
        console.error(
          'Token do GitHub não encontrado nas variáveis de ambiente.'
        );
        throw new Error(
          'GITHUB_TOKEN is not defined in environment variables.'
        );
      }

      const httpLink = new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });

      const link = ApolloLink.from([httpLink]);

      return {
        cache: new InMemoryCache(),
        link: link,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
          },
        },
      };
    }),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
