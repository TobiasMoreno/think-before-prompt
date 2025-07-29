import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  navigationOptions = [
    {
      title: 'Inteligencia Artificial',
      subtitle: 'Aprende sobre IA, prompts y mejores prácticas',
      description: 'Descubre cómo crear prompts efectivos, entender el contexto y evitar malas prácticas al trabajar con inteligencia artificial.',
      icon: '🤖',
      route: '/app/ia',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:from-purple-600 hover:to-pink-700'
    },
    {
      title: 'Angular',
      subtitle: 'Domina el framework de Google',
      description: 'Aprende los fundamentos, componentes, servicios, routing y todas las características avanzadas de Angular para crear aplicaciones web modernas.',
      icon: '⚡',
      route: '/app/angular/history',
      color: 'bg-gradient-to-r from-blue-600 to-purple-600',
      hoverColor: 'hover:from-blue-700 hover:to-purple-700'
    }
  ];

  @ViewChildren('slideSection', { read: ElementRef }) slideSections!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  renderer = inject(Renderer2);
  router = inject(Router);

  ngOnInit() {
    AOS.init();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
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