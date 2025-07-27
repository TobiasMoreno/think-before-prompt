import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  isSidebarOpen = true; // Sidebar abierto por defecto

  sidebarSections: SidebarSection[] = [
    {
      title: 'IA',
      expanded: false,
      items: [
        {
          label: '¿Qué es la IA?',
          path: '/que-es-ia',
          icon: '🧠',
          expanded: false
        },
        {
          label: 'Ventajas',
          path: '/ventajas',
          icon: '✅',
          expanded: false
        },
        {
          label: 'Prompt Engineering',
          path: '/prompt-engineering',
          icon: '📝',
          expanded: false
        },
        {
          label: 'Herramientas',
          path: '/herramientas',
          icon: '🛠️',
          expanded: false
        },
        {
          label: 'LLMs',
          path: '/llms',
          icon: '🤖',
          expanded: false
        },
        {
          label: 'MCPs',
          path: '/mcps',
          icon: '🎯',
          expanded: false
        },
        {
          label: 'IA en Desarrollo Web',
          path: '/ia-web',
          icon: '🌐',
          expanded: false
        },
        {
          label: 'Casos de Uso',
          path: '/comparativa-ia',
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
          label: 'Fundamentos',
          path: '/angular-fundamentos',
          icon: '📚',
          expanded: false
        },
        {
          label: 'Componentes',
          path: '/angular-componentes',
          icon: '🧩',
          expanded: false
        },
        {
          label: 'Servicios',
          path: '/angular-servicios',
          icon: '⚙️',
          expanded: false
        },
        {
          label: 'Routing',
          path: '/angular-routing',
          icon: '🛣️',
          expanded: false
        },
        {
          label: 'Formularios',
          path: '/angular-formularios',
          icon: '📋',
          expanded: false
        },
        {
          label: 'HTTP Client',
          path: '/angular-http',
          icon: '🌐',
          expanded: false
        }
      ]
    }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSection(section: SidebarSection) {
    section.expanded = !section.expanded;
  }

  isSectionExpanded(section: SidebarSection): boolean {
    return section.expanded;
  }
} 