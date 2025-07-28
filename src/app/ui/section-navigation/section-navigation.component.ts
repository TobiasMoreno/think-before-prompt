import { Component, OnInit, HostListener, input, output, inject } from '@angular/core';
import { SidebarService } from '../../core/sidebar/sidebar.service';

export interface NavigationSection {
  id: string;
  title: string;
  icon?: string;
}

@Component({
  selector: 'app-section-navigation',
  imports: [],
  templateUrl: './section-navigation.component.html',
})
export class SectionNavigationComponent implements OnInit {
  sections = input.required<NavigationSection[]>();
  activeColor = input.required<string>();
  hoverColor = input<string>('hover:bg-gray-300');

  sectionClick = output<string>();
  sectionChange = output<string>();

  showCurrentSection: boolean = true;
  showIcons: boolean = true;
  showTitles: boolean = true;
  scrollThreshold: number = 100;
  inactiveColor: string = 'bg-gray-200';
  textColor: string = 'text-gray-700';
  activeTextColor: string = 'text-white';
  position: 'fixed' | 'sticky' = 'fixed';
  zIndex: string = 'z-50';
  backgroundColor: string = 'bg-white';
  shadow: string = 'shadow-sm';
  padding: string = 'px-4 py-2';
  maxWidth: string = 'max-w-7xl';
  margin: string = 'mx-auto';
  buttonPadding: string = 'px-2 md:px-3 py-1';
  buttonTextSize: string = 'text-xs';
  buttonFontWeight: string = 'font-medium';
  transitionDuration: string = 'transition-all duration-200';
  hoverScale: string = 'hover:scale-105';
  responsiveIcons: boolean = true;
  responsiveTitles: boolean = true;

  currentSection: string = '';
  showNavigationBar: boolean = false;

  sidebarService = inject(SidebarService);

  ngOnInit() {
    if (this.sections().length > 0) {
      this.currentSection = this.sections()[0].id;
    }
    this.updateCurrentSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateCurrentSection();
    this.updateNavigationBarVisibility();
  }

  updateCurrentSection() {
    if (!this.sections().length) return;

    const sectionIds = this.sections().map(s => s.id);
    const scrollPosition = window.scrollY + 150;

    let foundActiveSection = false;
    let newActiveSection = this.currentSection;

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          newActiveSection = sectionId;
          foundActiveSection = true;
          break;
        }
      }
    }

    if (!foundActiveSection && this.sections().length > 0) {
      newActiveSection = this.sections()[0].id;
    }

    if (this.currentSection !== newActiveSection) {
      this.currentSection = newActiveSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      this.currentSection = sectionId;
      this.sectionClick.emit(sectionId);
    }
  }

  isSectionActive(sectionId: string): boolean {
    const isActive = this.currentSection === sectionId;
    return isActive;
  }

  getCurrentSectionTitle(): string {
    const currentSection = this.sections().find(s => s.id === this.currentSection);
    return currentSection ? currentSection.title : 'Inicio';
  }

  updateNavigationBarVisibility() {
    const scrollPosition = window.scrollY;
    this.showNavigationBar = scrollPosition > this.scrollThreshold;
  }

  getButtonClasses(sectionId: string): string {
    const baseClasses = `${this.buttonPadding} rounded-full ${this.buttonTextSize} ${this.buttonFontWeight} ${this.transitionDuration} ${this.hoverScale}`;
    
    if (this.isSectionActive(sectionId)) {
      const activeClasses = `${baseClasses} ${this.activeColor()} ${this.activeTextColor} shadow-md`;
      return activeClasses;
    } else {
      const inactiveClasses = `${baseClasses} ${this.inactiveColor} ${this.textColor} ${this.hoverColor()}`;
      return inactiveClasses;
    }
  }

  getContainerClasses(): string {
    const positionClass = this.position === 'fixed' ? 'fixed top-0 left-0 w-full' : 'sticky top-0';
    return `${positionClass} ${this.backgroundColor} ${this.shadow} ${this.zIndex} transition-all duration-300 ease-in-out`;
  }

  getContentClasses(): string {
    return `${this.maxWidth} ${this.margin} ${this.padding}`;
  }

  shouldShowIcon(section: NavigationSection): boolean {
    return this.showIcons && !!section.icon;
  }

  shouldShowTitle(section: NavigationSection): boolean {
    return this.showTitles && !!section.title;
  }

  getIconClasses(): string {
    return this.responsiveIcons ? 'hidden sm:inline' : '';
  }

  getTitleClasses(): string {
    return this.responsiveTitles ? 'hidden md:inline ml-1' : 'ml-1';
  }
} 