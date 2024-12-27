import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel-features',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel-features.component.html',
  styleUrls: ['./carousel-features.component.scss'],
})
export class CarouselFeatures {
  images = [
    {
      src: '../../../../assets/images/features/1-git.svg',
      alt: 'Feature 1',
    },
    {
      src: '../../../../assets/images/features/2-github.svg',
      alt: 'Feature 2',
    },
    {
      src: '../../../../assets/images/features/3-javascript.svg',
      alt: 'Feature 3',
    },
    {
      src: '../../../../assets/images/features/4-typescript.svg',
      alt: 'Feature 4',
    },
    {
      src: '../../../../assets/images/features/5-java.svg',
      alt: 'Feature 5',
    },
    {
      src: '../../../../assets/images/features/6-angular.svg',
      alt: 'Feature 6',
    },
    {
      src: '../../../../assets/images/features/7-spring.svg',
      alt: 'Feature 7',
    },
    {
      src: '../../../../assets/images/features/8-wordpress.svg',
      alt: 'Feature 8',
    },
    {
      src: '../../../../assets/images/features/9-elementor.svg',
      alt: 'Feature 9',
    },
    {
      src: '../../../../assets/images/features/10-woocommerce.svg',
      alt: 'Feature 10',
    },
    {
      src: '../../../../assets/images/features/11-bubble.svg',
      alt: 'Feature 11',
    },
    {
      src: '../../../../assets/images/features/12-flutterflow.svg',
      alt: 'Feature 12',
    },
  ];

  slideConfig = {
    slidesToShow: 11, // Número de slides visíveis
    slidesToScroll: 1, // Quantos slides mover por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 0, // Velocidade entre animações
    infinite: true, // Ativa o loop infinito
    arrows: false, // Exibir botões de navegação
    dots: false, // Ocultar os pontos de páginação
    speed: 4000, // Tempo da transição em milissegundos
    cssEase: 'linear', // Animação linear para movimento contínuo
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 8, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    ],
  };
}
