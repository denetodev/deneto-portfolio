import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GithubService } from '@app/shared/services/github.service';
import { GithubData } from '@app/shared/interfaces/githubData.interface';
import { Tag } from 'primeng/tag';

interface SocialLink {
  url: string;
  icon: string;
}

interface InstagramPost {
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, Tag],
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss'],
  providers: [GithubService],
})
export class LinksPageComponent implements OnInit {
  name: string = 'Neto';
  role: string = 'FullStack Developer';
  githubUsername = 'denetodev';
  githubData?: GithubData;
  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    { url: 'https://linkedin.com/', icon: 'pi pi-linkedin' },
    { url: 'https://github.com/', icon: 'pi pi-github' },
    { url: 'https://instagram.com/', icon: 'pi pi-instagram' },
  ];

  instagramPosts: InstagramPost[] = [
    {
      imageUrl: '../../../assets/images/link-page/instagram01.jpg',
      alt: 'Post 1',
    },
    {
      imageUrl: '../../../assets/images/link-page/instagram02.jpg',
      alt: 'Post 2',
    },
    {
      imageUrl: '../../../assets/images/link-page/instagram03.jpg',
      alt: 'Post 3',
    },
    // {
    //   imageUrl: '../../../assets/images/link-page/instagram04.jpg',
    //   alt: 'Post 4',
    // },
    // {
    //   imageUrl: '../../../assets/images/link-page/instagram05.jpg',
    //   alt: 'Post 5',
    // },
    // {
    //   imageUrl: '../../../assets/images/link-page/instagram06.jpg',
    //   alt: 'Post 6',
    // },
  ];

  followers: number = 853;
  posts: number = 6;

  private githubService = inject(GithubService);

  ngOnInit() {
    this.fetchGithubData();
  }

  fetchGithubData() {
    this.githubService.getUserContributions(this.githubUsername).subscribe({
      next: (data: GithubData) => {
        this.githubData = data;
      },
      error: (error) => {
        console.error('Error fetching GitHub data:', error);
      },
    });
  }

  getContributionColor(count: number): string {
    if (count === 0) return '#161b22';
    if (count < 3) return '#0e4429';
    if (count < 5) return '#006d32';
    if (count < 10) return '#26a641';
    return '#39d353';
  }
}
