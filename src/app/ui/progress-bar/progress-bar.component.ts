import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProgressStep {
  label: string;
  completed?: boolean;
  routerLink?: string;
}

@Component({
  selector: 'app-progress-bar',
  imports: [RouterLink],
  template: `
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-600">Progreso del aprendizaje</span>
        <span class="text-sm font-medium text-blue-600">{{ currentStep() }} de {{ totalSteps() }}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" [style.width.%]="progressPercentage"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-500 mt-2">
        @for (step of steps(); track step.label) {
          <a routerLink="/app/ia{{ step.routerLink }}">{{ step.label }}</a>
        }
      </div>
    </div>
  `,
  styles: []
})
export class ProgressBarComponent {
  currentStep = input<number>(1);
  totalSteps = input<number>(8);
  steps = input<ProgressStep[]>([
    { label: 'Inicio', routerLink: '/' },
    { label: '¿Qué es la IA?', routerLink: '/what-is-ia' },
    { label: 'Delimitadores', routerLink: '/delimiters' },
    { label: 'Prompt Engineering', routerLink: '/prompt-engineering' },
    { label: 'Herramientas', routerLink: '/tools' },
    { label: 'LLMs', routerLink: '/llms' },
    { label: 'MCPs', routerLink: '/mcps' },
  ]);

  get progressPercentage(): number {
    return (this.currentStep() / this.totalSteps()) * 100;
  }
} 