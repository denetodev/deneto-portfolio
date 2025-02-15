import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-services',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss'],
})
export class CardServicesComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
