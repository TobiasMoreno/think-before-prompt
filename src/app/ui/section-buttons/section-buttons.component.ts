import { Component, input, output } from '@angular/core';

export interface Section {
  id: string;
  title: string;
  icon?: string;
}

@Component({
  selector: 'app-section-buttons',
  standalone: true,
  imports: [],
  template: `
    <nav class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center">
        @for (section of sections(); track section.id) {
        <button 
          (click)="onSectionClick(section.id)"
          class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
          [class]="getActiveClasses(section.id)">
          {{ section.title }}
        </button>
        }
      </div>
    </nav>
  `,
  styles: []
})
export class SectionButtonsComponent {
  sections = input.required<Section[]>();
  activeSection = input.required<string>();
  activeColor = input.required<string>();
  
  sectionClick = output<string>();

  onSectionClick(sectionId: string): void {
    this.sectionClick.emit(sectionId);
  }

  getActiveClasses(sectionId: string): string {
    const baseClasses = 'px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors';
    
    if (this.activeSection() === sectionId) {
      const colorMatch = this.activeColor().match(/bg-(\w+)-\d+/);
      const color = colorMatch ? colorMatch[1] : 'blue';
      
      return `${baseClasses} bg-${color}-100 text-${color}-700`;
    }
    
    return baseClasses;
  }
} 