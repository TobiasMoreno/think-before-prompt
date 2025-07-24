import { Component, input } from '@angular/core';

export interface ProgressStep {
  label: string;
  completed?: boolean;
}

@Component({
  selector: 'app-progress-bar',
  imports: [],
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
          <span>{{ step.label }}</span>
        }
      </div>
    </div>
  `,
  styles: []
})
export class ProgressBarComponent {
  currentStep = input<number>(1);
  totalSteps = input<number>(7);
  steps = input<ProgressStep[]>([
    { label: 'Inicio' },
    { label: '¿Qué es la IA?' },
    { label: 'Prompt Engineering' },
    { label: 'Herramientas' },
    { label: 'LLMs' },
    { label: 'MCPs' },
    { label: 'Casos de uso' }
  ]);

  get progressPercentage(): number {
    return (this.currentStep() / this.totalSteps()) * 100;
  }
} 