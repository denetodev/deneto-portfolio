import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GroupButtonComponent } from '@app/shared/components/group-button/group-button.component';
import { TypewriterComponent } from '@app/shared/components/typewriter/typewriter.component';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import JSConfetti from 'js-confetti';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TypewriterComponent,
    GroupButtonComponent,
    ButtonModule,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ratingValue: number = 5;
  yearsOfExperience: number = 3;

  private jsConfetti: JSConfetti | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.jsConfetti = new JSConfetti();
    }
  }

  onButtonClick(): void {
    if (isPlatformBrowser(this.platformId) && this.jsConfetti) {
      this.jsConfetti.addConfetti({
        confettiRadius: 1.5,
        confettiNumber: 1000,
        confettiColors: ['#f57920', '#0002f5', '#13138c'],
      });
    }
  }
}
