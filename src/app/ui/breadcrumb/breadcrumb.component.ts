import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    <nav class="mb-6">
      <ol class="flex items-center space-x-2 text-sm text-gray-600">
        @for (item of items(); track item.label; let last = $last) {
          <li class="flex items-center">
            @if (last) {
              <span class="text-blue-600 font-medium">{{ item.label }}</span>
            } @else {
              @if (item.path) {
                <a [routerLink]="item.path" class="hover:text-blue-600">{{ item.label }}</a>
              } @else {
                <span>{{ item.label }}</span>
              }
              <span class="mx-2">→</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: []
})
export class BreadcrumbComponent {
  items = input<BreadcrumbItem[]>([]);
} 