import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { Component, inject, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GithubData } from '@app/shared/interfaces/githubData.interface';
import { GithubService } from '@app/shared/services/github.service';

//TODO criar arquivos de interface para SocialLink e InstagramPost
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
  imports: [CommonModule, ButtonModule, AvatarModule, CardModule],
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss'],
  providers: [GithubService],
})
export class LinksPageComponent implements OnInit {
  name: string = 'Neto';
  role: string = 'FullStack Developer ';
  githubUsername = 'denetodev';
  githubData!: GithubData;

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
  ];

  followers: number = 853;
  posts: number = 3;
  githubFollowers: number = 8;
  monthlyContributions: number = 29;
  social: any;

  constructor(private githubService: GithubService) {}
  private apollo = inject(Apollo);

  ngOnInit() {
    this.fetchGithubData();
  }

  fetchGithubData() {
    this.githubService.getUserContributions(this.githubUsername).subscribe({
      next: (data: GithubData) => {
        console.log('GitHub data received:', data);
        this.githubData = data;
      },
      error: (error: any) => {
        console.error('Error fetching GitHub data:', error);
        // Aqui você pode adicionar lógica para mostrar uma mensagem ao usuário
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
