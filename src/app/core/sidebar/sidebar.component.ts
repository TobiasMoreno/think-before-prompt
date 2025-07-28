import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SidebarService } from './sidebar.service';

export interface SidebarItem {
  label: string;
  path?: string;
  icon: string;
  children?: SidebarItem[];
  expanded?: boolean;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
  expanded: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);
  router = inject(Router);

  sidebarSections: SidebarSection[] = [
    {
      title: 'IA',
      expanded: false,
      items: [
        {
          label: '¿Qué es la IA?',
          path: '/app/ia/what-is-ia',
          icon: '🧠',
          expanded: false
        },
        {
          label: 'Ventajas',
          path: '/app/ia/advantages',
          icon: '✅',
          expanded: false
        },
        {
          label: 'Prompt Engineering',
          path: '/app/ia/prompt-engineering',
          icon: '📝',
          expanded: false
        },
        {
          label: 'Herramientas',
          path: '/app/ia/tools',
          icon: '🛠️',
          expanded: false
        },
        {
          label: 'LLMs',
          path: '/app/ia/llms',
          icon: '🤖',
          expanded: false
        },
        {
          label: 'MCPs',
          path: '/app/ia/mcps',
          icon: '🎯',
          expanded: false
        },
        {
          label: 'IA en Desarrollo Web',
          path: '/app/ia/ia-web',
          icon: '🌐',
          expanded: false
        },
        {
          label: 'Casos de Uso',
          path: '/app/ia/comparative-ia',
          icon: '📊',
          expanded: false
        }
      ]
    },
    {
      title: 'Introducción a Angular',
      expanded: false,
      items: [
        {
          label: 'Historia de Angular',
          path: '/app/angular/history',
          icon: '📜',
          expanded: false
        },
        {
          label: 'Fundamentos',
          path: '/app/angular/fundamentals',
          icon: '📚',
          expanded: false
        },
        {
          label: 'Componentes',
          path: '/app/angular/components',
          icon: '🧩',
          expanded: false
        },
        {
          label: 'Servicios',
          path: '/app/angular/services',
          icon: '⚙️',
          expanded: false
        },
        {
          label: 'Routing',
          path: '/app/angular/routing',
          icon: '🛣️',
          expanded: false
        },
        {
          label: 'Formularios',
          path: '/app/angular/forms',
          icon: '📋',
          expanded: false
        },
        {
          label: 'HTTP Client',
          path: '/app/angular/http-client',
          icon: '🌐',
          expanded: false
        },
        {
          label: 'Inputs y Outputs',
          path: '/app/angular/inputs-outputs',
          icon: '📝',
          expanded: false
        }
      ]
    }
  ];

  getCurrentSectionTitle(): string {
    const currentPath = this.router.url;
    
    for (const section of this.sidebarSections) {
      for (const item of section.items) {
        if (item.path === currentPath) {
          return section.title;
        }
      }
    }
    
    return 'Think Before Prompt';
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleSection(section: SidebarSection) {
    section.expanded = !section.expanded;
  }

  isSectionExpanded(section: SidebarSection): boolean {
    return section.expanded;
  }
} 