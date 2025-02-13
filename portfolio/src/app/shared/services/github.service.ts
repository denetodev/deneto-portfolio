import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GithubData } from '../interfaces/githubData.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private apollo: Apollo) {}

  getUserContributions(username: string): Observable<GithubData> {
    const GET_CONTRIBUTIONS = gql`
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
          followers {
            totalCount
          }
        }
      }
    `;

    return this.apollo
      .watchQuery<any>({
        query: GET_CONTRIBUTIONS,
      })
      .valueChanges.pipe(map((result) => result.data.user));
  }
}
