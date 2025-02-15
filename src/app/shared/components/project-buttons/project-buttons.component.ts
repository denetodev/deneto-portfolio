import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-project-buttons',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './project-buttons.component.html',
  styleUrls: ['./project-buttons.component.scss'],
})
export class ProjectButtonsComponent {
  @Input() githubUrl: string = '';
  @Input() siteUrl: string = '';
}
