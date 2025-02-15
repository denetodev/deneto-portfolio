import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '@app/shared/services/scroll.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-group-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss',
})
export class GroupButtonComponent {
  constructor(private router: Router, private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollService.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollService.scrollToElement(sectionId);
    }
  }
}
