import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-dev-cases',
  imports: [ RouterModule],
  templateUrl: './web-dev-cases.component.html',
  styleUrl: './web-dev-cases.component.css',
})
export class WebDevCasesComponent implements OnInit {
  currentSection: string = '';
  showNavigationBar: boolean = false;
  sections = [
    { id: 'generacion-codigo', title: 'Generación de Código', icon: '💻' },
    { id: 'debugging', title: 'Debugging IA', icon: '🐛' },
    { id: 'testing', title: 'Testing Automatizado', icon: '🧪' },
    { id: 'ux-ui', title: 'UX/UI Optimización', icon: '🎨' },
    { id: 'devops', title: 'DevOps y CI/CD', icon: '🚀' },
    { id: 'mejores-practicas', title: 'Mejores Prácticas', icon: '⭐' },
  ];

  ngOnInit() {
    this.updateCurrentSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateCurrentSection();
    this.updateNavigationBarVisibility();
  }

  updateCurrentSection() {
    const sections = this.sections.map((s) => s.id);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.currentSection = sectionId;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Actualizar la sección actual inmediatamente
      this.currentSection = sectionId;
      // Tracking opcional
      this.trackSectionView(sectionId);
    }
  }

  isSectionActive(sectionId: string): boolean {
    return this.currentSection === sectionId;
  }

  getCurrentSectionTitle(): string {
    const currentSection = this.sections.find(s => s.id === this.currentSection);
    return currentSection ? currentSection.title : 'Inicio';
  }

  updateNavigationBarVisibility() {
    const scrollPosition = window.scrollY;
    // Mostrar la barra cuando el scroll sea mayor a 100px
    this.showNavigationBar = scrollPosition > 100;
  }

  // Métodos para tracking de interacciones (opcional)
  trackSectionView(sectionId: string) {
    console.log(`Sección vista: ${sectionId}`);
    // Aquí podrías implementar analytics
  }

  trackToolClick(toolName: string) {
    console.log(`Herramienta clickeada: ${toolName}`);
    // Aquí podrías implementar analytics
  }
}
