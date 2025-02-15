export interface GithubData {
  contributionsCollection?: {
    contributionCalendar?: {
      weeks?: Array<{
        contributionDays: Array<{
          contributionCount: number;
        }>;
      }>;
    };
  };
}
