import { Component } from '@angular/core';
import { GroupButtonComponent } from '@app/shared/components/group-button/group-button.component';
import { TypewriterComponent } from '@app/shared/components/typewriter/typewriter.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

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
}
