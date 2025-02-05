import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardChallengeComponent } from '@app/shared/components/card-challenge/card-challenge.component';
import { VerMaisButtonComponent } from '@app/shared/components/ver-mais-button/ver-mais-button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [VerMaisButtonComponent, ButtonModule, CardChallengeComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private router: Router) {}
  navigateToProjectPage() {
    this.router.navigate(['/project-page']);
  }
}
