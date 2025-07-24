import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavigationOption {
  title: string;
  description: string;
  path: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-section-navigation',
  imports: [RouterLink],
  template: `
    <div class="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-4">🚀 ¿Qué sigue en tu aprendizaje?</h3>
      <div class="grid gap-4 md:grid-cols-2">
        @for (option of options(); track option.title) {
          <div class="bg-white rounded-lg p-4 shadow">
            <h4 class="font-semibold text-gray-900 mb-2">{{ option.icon }} {{ option.title }}</h4>
            <p class="text-sm text-gray-600 mb-3">{{ option.description }}</p>
            <a [routerLink]="option.path" 
               class="inline-block text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
               [class]="option.color">
              Continuar →
            </a>
          </div>
        }
      </div>
    </div>
  `,
  styles: []
})
export class SectionNavigationComponent {
  options = input<NavigationOption[]>([]);
} 