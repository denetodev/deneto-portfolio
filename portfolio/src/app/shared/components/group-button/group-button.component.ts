import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-group-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss',
})
export class GroupButtonComponent {
  
}
