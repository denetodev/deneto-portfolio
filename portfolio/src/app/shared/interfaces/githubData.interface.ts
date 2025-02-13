import { ContributionGithub } from './contributionGithub.interface';

export interface GithubData {
  followers: {
    totalCount: number;
  };
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: {
        contributionDays: ContributionGithub[];
      }[];
    };
  };
}
