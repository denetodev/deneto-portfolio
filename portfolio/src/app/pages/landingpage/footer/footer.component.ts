import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactButtonComponent } from '@app/shared/components/contact-button/contact-button.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuModule } from 'primeng/menu';
import { ScrollService } from '@app/shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactButtonComponent,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
