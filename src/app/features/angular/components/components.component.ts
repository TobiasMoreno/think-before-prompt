import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { SectionButtonsComponent } from "../../../ui/section-buttons/section-buttons.component";

@Component({
  selector: 'app-components',
  imports: [CommonModule, RouterModule, SectionNavigationComponent, SectionButtonsComponent],
  templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit {
  activeSection = 'intro';
  
  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🧩' },
    { id: 'structure', title: 'Estructura', icon: '🏗️' },
    { id: 'lifecycle', title: 'Ciclos de Vida', icon: '🔄' },
    { id: 'communication', title: 'Comunicación', icon: '💬' },
    { id: 'advanced', title: 'Avanzado', icon: '🚀' }
  ];

  // Ejemplos de código
  basicComponentExample = `@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button (click)="onEdit()">Editar</button>
    </div>
  \`,
  styles: [\`
    .user-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
    }
  \`]
})
export class UserCardComponent {
  user = { name: 'Juan Pérez', email: 'juan@example.com' };
  
  onEdit() {
    console.log('Editando usuario:', this.user.name);
  }
}`;

  lifecycleExample = `@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Lifecycle Demo</h2>
      <p>Contador: {{ counter }}</p>
      <button (click)="increment()">Incrementar</button>
    </div>
  \`
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {
  counter = 0;
  private intervalId: any;

  ngOnInit() {
    console.log('Componente inicializado');
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Componente destruido');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  increment() {
    this.counter++;
  }
}`;

  inputOutputExample = `// Componente padre
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: \`
    <app-user-card 
      [user]="currentUser"
      [showActions]="true"
      (userEdit)="handleUserEdit($event)">
    </app-user-card>
  \`
})
export class ParentComponent {
  currentUser = { name: 'Ana García', email: 'ana@example.com' };
  
  handleUserEdit(user: any) {
    console.log('Usuario editado:', user);
  }
}

// Componente hijo
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      @if (showActions) {
        <button (click)="editUser()">Editar</button>
      }
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: any = {};
  @Input() showActions = false;
  @Output() userEdit = new EventEmitter<any>();
  
  editUser() {
    this.userEdit.emit(this.user);
  }
}`;

  contentProjectionExample = `@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .card-header { background: #f8f9fa; padding: 1rem; }
    .card-body { padding: 1rem; }
    .card-footer { background: #f8f9fa; padding: 1rem; }
  \`]
})
export class CardComponent {}

// Uso del componente
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: \`
    <app-card>
      <div slot="header">
        <h3>Título de la Tarjeta</h3>
      </div>
      <p>Contenido principal de la tarjeta</p>
      <div slot="footer">
        <button>Acción</button>
      </div>
    </app-card>
  \`
})
export class DemoComponent {}`;

  viewChildExample = `@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: \`
    <app-child #childRef></app-child>
    <button (click)="callChildMethod()">Llamar método del hijo</button>
  \`
})
export class ParentComponent {
  @ViewChild('childRef') childComponent!: ChildComponent;
  
  callChildMethod() {
    this.childComponent.childMethod();
  }
}

@Component({
  selector: 'app-child',
  standalone: true,
  template: \`
    <div>Componente Hijo</div>
  \`
})
export class ChildComponent {
  childMethod() {
    console.log('Método del componente hijo llamado');
  }
}`;

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