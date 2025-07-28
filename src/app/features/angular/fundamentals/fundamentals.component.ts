import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { SectionButtonsComponent } from "../../../ui/section-buttons/section-buttons.component";

@Component({
  selector: 'app-fundamentals',
  imports: [CommonModule, RouterModule, SectionNavigationComponent, SectionButtonsComponent],
  templateUrl: './fundamentals.component.html',
})
export class FundamentalsComponent implements OnInit {
  activeSection = 'intro';
  
  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🚀' },
    { id: 'standalone', title: 'Standalone Components', icon: '🧩' },
    { id: 'di', title: 'Dependency Injection', icon: '💉' },
    { id: 'routing', title: 'Routing Moderno', icon: '🛣️' }
  ];

  // Ejemplos de código
  standaloneExample = `@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: \`
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button (click)="handleClick()">
        Click me
      </button>
    </div>
  \`
})
export class ExampleComponent {
  title = 'Mi Componente Standalone';
  description = 'Este es un componente independiente';

  handleClick() {
    console.log('¡Componente standalone funcionando!');
  }
}`;

  serviceExample = `@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];

  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item);
  }

  clearData() {
    this.data = [];
  }
}

// Uso en componente
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Usuarios</h2>
      <ul>
        <li *ngFor="let user of users">
          {{ user.name }}
        </li>
      </ul>
    </div>
  \`
})
export class UserListComponent {
  users: any[] = [];

  constructor(private dataService: DataService) {
    this.users = this.dataService.getData();
  }
}`;

  routingExample = `// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./users/user-list.component')
      .then(m => m.UserListComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component')
      .then(m => m.ProfileComponent)
  }
];

// Componente con routing
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/users">Users</a>
      <a routerLink="/profile">Profile</a>
    </nav>
    <router-outlet></router-outlet>
  \`
})
export class MainComponent {}`;



  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateActiveSection() {
    const sections = this.sections.map(s => s.id);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  copyCode(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const text = element.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        // Opcional: mostrar notificación de éxito
        console.log('Código copiado al portapapeles');
      }).catch(err => {
        console.error('Error al copiar: ', err);
      });
    }
  }

  // Métodos para el componente de navegación
  onSectionClick(sectionId: string) {
    console.log(`Sección clickeada: ${sectionId}`);
    this.scrollToSection(sectionId);
  }

  onSectionChange(sectionId: string) {
    console.log(`Sección cambiada: ${sectionId}`);
    this.activeSection = sectionId;
  }
} 