import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map, catchError } from 'rxjs';
import { GithubData } from '../interfaces/githubData.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private apollo: Apollo) {}

  getUserContributions(username: string): Observable<GithubData> {
    const query = gql`
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    return this.apollo
      .watchQuery({
        query,
        variables: { username },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(
        map((result: any) => {
          if (result.errors) {
            console.error('GraphQL Errors:', result.errors);
            throw result.errors;
          }

          const data = result.data?.user as GithubData;

          // Filtra apenas as últimas 22 semanas se houver dados
          if (data?.contributionsCollection?.contributionCalendar?.weeks) {
            const allWeeks =
              data.contributionsCollection.contributionCalendar.weeks;
            const last22Weeks = allWeeks.slice(-29);

            return {
              contributionsCollection: {
                contributionCalendar: {
                  weeks: last22Weeks,
                },
              },
            };
          }

          return data;
        }),
        catchError((error) => {
          console.error('GitHub API Error:', error);
          throw error;
        })
      );
  }
}
