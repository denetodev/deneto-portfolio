import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent {
  @Input() label: string = 'Fale Comigo';
  @Input() buttonClass: string = 'contact-btn';
  @Input() link: string = '/links-page';
  @Output() clicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  handleButtonClick() {
    this.router.navigate([this.link]);
    this.clicked.emit();
  }
}
