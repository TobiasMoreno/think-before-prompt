import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  slides = [
    {
      title: 'Piensa antes de promptar',
      text: 'Mejora tus resultados con IA entendiendo el contexto y las mejores prácticas.',
      button: 'Comenzar',
      icon: '🚀'
    },
    {
      title: 'Descubre el poder del contexto',
      text: 'Un buen prompt depende de entender el problema y el objetivo.',
      button: 'Aprender más',
      icon: '💡'
    },
    {
      title: 'Evita malas prácticas',
      text: 'Conoce los errores comunes y cómo evitarlos al interactuar con IA.',
      button: 'Ver ejemplos',
      icon: '⚡'
    },
  ];
  visibleSlides: boolean[] = [false, false, false];

  @ViewChildren('slideSection', { read: ElementRef }) slideSections!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = Number((entry.target as HTMLElement).getAttribute('data-slide-idx'));
        if (entry.isIntersecting) {
          if (idx === 0) {
            this.renderer.removeClass(entry.target, 'fade-out-left');
            this.renderer.addClass(entry.target, 'fade-in-left');
          } else {
            this.renderer.removeClass(entry.target, 'zoom-out-through');
            this.renderer.addClass(entry.target, 'zoom-in-far');
          }
        } else {
          if (idx === 0) {
            this.renderer.removeClass(entry.target, 'fade-in-left');
            this.renderer.addClass(entry.target, 'fade-out-left');
          } else {
            this.renderer.removeClass(entry.target, 'zoom-in-far');
            this.renderer.addClass(entry.target, 'zoom-out-through');
          }
        }
      });
    }, {
      threshold: 0.5
    });

    this.slideSections.forEach((section, idx) => {
      this.renderer.setAttribute(section.nativeElement, 'data-slide-idx', idx.toString());
      this.observer.observe(section.nativeElement);
    });
  }
} 