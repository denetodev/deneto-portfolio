import {
  Component,
  OnInit,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss',
})
export class TypewriterComponent implements OnInit, AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  @Input() strings: string[] = ['Programmer', 'Designer', 'YouTuber'];
  @Input() typeSpeed: number = 150;
  @Input() backSpeed: number = 150;
  @Input() loop: boolean = true;

  private typed!: Typed;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: this.strings,
        typeSpeed: this.typeSpeed,
        backSpeed: this.backSpeed,
        loop: this.loop,
      };

      // Inicializa o Typed.js após a view estar pronta
      this.typed = new Typed(this.typedElement.nativeElement, options);
    }
  }

  ngOnDestroy() {
    // Importante: destruir a instância do Typed quando o componente for destruído
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
