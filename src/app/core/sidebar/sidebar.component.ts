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
          path: '/ia/what-is-ia',
          icon: '🧠',
          expanded: false
        },
        {
          label: 'Ventajas',
          path: '/ia/advantages',
          icon: '✅',
          expanded: false
        },
        {
          label: 'Prompt Engineering',
          path: '/ia/prompt-engineering',
          icon: '📝',
          expanded: false
        },
        {
          label: 'Herramientas',
          path: '/ia/tools',
          icon: '🛠️',
          expanded: false
        },
        {
          label: 'LLMs',
          path: '/ia/llms',
          icon: '🤖',
          expanded: false
        },
        {
          label: 'MCPs',
          path: '/ia/mcps',
          icon: '🎯',
          expanded: false
        },
        {
          label: 'IA en Desarrollo Web',
          path: '/ia/ia-web',
          icon: '🌐',
          expanded: false
        },
        {
          label: 'Casos de Uso',
          path: '/ia/comparative-ia',
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
          path: '/angular/history',
          icon: '📜',
          expanded: false
        },
        {
          label: 'Fundamentos',
          path: '/angular/fundamentals',
          icon: '📚',
          expanded: false
        },
        {
          label: 'Componentes',
          path: '/angular/components',
          icon: '🧩',
          expanded: false
        },
        {
          label: 'Servicios',
          path: '/angular/services',
          icon: '⚙️',
          expanded: false
        },
        {
          label: 'Routing',
          path: '/angular/routing',
          icon: '🛣️',
          expanded: false
        },
        {
          label: 'Formularios',
          path: '/angular/forms',
          icon: '📋',
          expanded: false
        },
        {
          label: 'HTTP Client',
          path: '/angular/http-client',
          icon: '🌐',
          expanded: false
        },
        {
          label: 'Inputs y Outputs',
          path: '/angular/inputs-outputs',
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