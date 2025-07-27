import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../ui/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-generative-ai',
    imports: [CommonModule, RouterLink, ProgressBarComponent, BreadcrumbComponent],
    templateUrl: './generative-ai.component.html',
    styleUrl: './generative-ai.component.css'
})
export class GenerativeAiComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?' }
  ];
} 