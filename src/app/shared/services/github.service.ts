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
          return result.data?.user as GithubData;
        }),
        catchError((error) => {
          console.error('GitHub API Error:', error);
          throw error;
        })
      );
  }
}
