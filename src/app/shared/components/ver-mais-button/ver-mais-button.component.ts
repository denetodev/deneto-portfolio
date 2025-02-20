import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ver-mais-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './ver-mais-button.component.html',
  styleUrl: './ver-mais-button.component.scss',
})
export class VerMaisButtonComponent {
  @Input() route: string = ''; // Propriedade de entrada para a rota de destino

  constructor(private router: Router) {}

  // Método para navegar para a rota especificada
  navigateToRoute(): void {
    // Rola a página para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
