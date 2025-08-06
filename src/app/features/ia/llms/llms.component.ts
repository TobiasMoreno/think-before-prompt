import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../ui/breadcrumb/breadcrumb.component';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { ExampleCardComponent } from '../../../ui/example-card/example-card.component';
import { ToolCardComponent } from '../../../ui/tool-card/tool-card.component';

export interface LLMExample {
  title: string;
  description: string;
  code: string;
  explanation: string;
  icon: string;
  link?: string;
}

export interface AngularAITool {
  name: string;
  description: string;
  features: string[];
  setup: string;
  icon: string;
  link: string;
}

export interface ImplementationExample {
  title: string;
  description: string;
  code: string;
  result: string;
  icon: string;
}

@Component({
  selector: 'app-llms',
  imports: [RouterLink, ProgressBarComponent, BreadcrumbComponent, SectionNavigationComponent, ExampleCardComponent, ToolCardComponent],
  templateUrl: './llms.component.html',
  styleUrls: ['./llms.component.css']
})
export class LLMsComponent {
  // Secciones para navegación
  sections: NavigationSection[] = [
    { id: 'introduccion', title: 'Introducción', icon: '🏆' },
    { id: 'ejemplos', title: 'Ejemplos Prácticos', icon: '💻' },
    { id: 'herramientas', title: 'Herramientas Oficiales', icon: '🛠️' },
    { id: 'caracteristicas', title: 'Características', icon: '🚀' },
    { id: 'comparacion', title: 'Comparación', icon: '⚖️' },
    { id: 'navegacion', title: 'Navegación', icon: '🚀' }
  ];

  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: '/what-is-ia' },
    { label: 'Delimitadores', path: '/delimiters' },
    { label: 'Prompt Engineering', path: '/prompt-engineering' },
    { label: 'Herramientas', path: '/tools' },
    { label: 'LLMs y Angular 20' }
  ];

  llmExamples: LLMExample[] = [
    {
      title: '¿Qué son los LLMs?',
      description: 'Los Large Language Models (LLMs) son modelos de inteligencia artificial entrenados con grandes cantidades de texto para entender y generar lenguaje natural.',
      code: `// Ejemplo de cómo funciona un LLM
const prompt = "Explica qué es Angular";
const response = await llm.generate(prompt);
// Resultado: "Angular es un framework de desarrollo..."`,
      explanation: 'Los LLMs procesan texto de entrada (prompt) y generan respuestas coherentes basadas en su entrenamiento.',
      icon: '🧠'
    },
    {
      title: 'Angular 20: Primer Framework con IA Integrada',
      description: 'Angular 20 fue el primer framework de desarrollo web en integrar oficialmente capacidades de IA para mejorar la experiencia de desarrollo.',
      code: `// Angular 20 - Primer framework con IA nativa
ng generate component --ai "user-profile"
// El CLI genera automáticamente el componente con IA

// Resultado automático:
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="user-profile">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  user = input<User>({ name: '', email: '' });
}`,
      explanation: 'Angular 20 revolucionó el desarrollo al ser el primer framework en integrar IA nativamente.',
      icon: '🏆'
    },
    {
      title: 'Integración con Copilot',
      description: 'Angular 20 se integra mejor con herramientas como GitHub Copilot para desarrollo asistido por IA.',
      code: `// Ejemplo de integración con Copilot
@Component({
  selector: 'app-data-table',
  template: \`
    <table>
      <tr *ngFor="let item of data">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  \`
})
export class DataTableComponent {
  // Copilot puede sugerir métodos, propiedades y lógica
  data: any[] = [];
  
  // Sugerencia automática de métodos
  addItem(item: any) {
    this.data.push(item);
  }
}`,
      explanation: 'La integración permite sugerencias de código más precisas y contextuales para Angular.',
      icon: '🤖'
    },
    {
      title: 'Generación de Tests',
      description: 'Angular 20 puede generar tests automáticamente usando LLMs para mejorar la calidad del código.',
      code: `// Angular 20 - Generación automática de tests
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests generados automáticamente por IA
  it('should display user name', () => {
    component.user = { name: 'John' };
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('John');
  });
});`,
      explanation: 'Los LLMs analizan el código y generan tests relevantes automáticamente.',
      icon: '🧪'
    },
    {
      title: 'Documentación Automática',
      description: 'Angular 20 puede generar documentación automática usando LLMs para explicar el código.',
      code: `/**
 * Componente para mostrar información del usuario
 * @description Este componente maneja la visualización de datos de usuario
 * @example
 * <app-user-profile [user]="userData"></app-user-profile>
 */
@Component({
  selector: 'app-user-profile',
  template: \`
    <div class="user-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  user = input<User>({ name: '', email: '' });
}`,
      explanation: 'Los LLMs generan documentación clara y contextual para el código Angular.',
      icon: '📚'
    }
  ];

  angularAITools: AngularAITool[] = [
    {
      name: 'Angular CLI MCP Server',
      description: 'El Angular CLI incluye un servidor MCP (Model Context Protocol) experimental que permite a los asistentes de IA en tu entorno de desarrollo interactuar con el Angular CLI.',
      features: [
        'Generación automática de componentes',
        'Sugerencias de código contextuales',
        'Integración con IDEs',
        'Comandos CLI asistidos por IA'
      ],
      setup: 'Configura el servidor MCP en tu IDE para obtener asistencia de IA integrada con Angular CLI.',
      icon: '⚡',
      link: 'https://angular.dev/ai/develop-with-ai#angular-cli-mcp-server-setup',
    },
    {
      name: 'llms.txt',
      description: 'Archivo estándar propuesto para ayudar a los LLMs a entender mejor el contenido de Angular y generar código más preciso.',
      features: [
        'Contexto específico de Angular',
        'Mejores prácticas actualizadas',
        'Generación de código más precisa',
        'Documentación automática'
      ],
      setup: 'Incluye llms.txt en tu proyecto para proporcionar contexto específico de Angular a los LLMs.',
      icon: '📄',
      link: 'https://angular.dev/ai/develop-with-ai#providing-context-with-llmstxt',
    },
    {
      name: 'Custom Prompts y System Instructions',
      description: 'Instrucciones personalizadas y prompts específicos para mejorar la generación de código con LLMs en Angular.',
      features: [
        'Prompts optimizados para Angular',
        'Instrucciones de mejores prácticas',
        'Generación de código consistente',
        'Sugerencias contextuales'
      ],
      setup: 'Usa los archivos de instrucciones personalizadas en tu IDE para mejorar la generación de código.',
      icon: '🎯',
      link: 'https://angular.dev/ai/develop-with-ai#custom-prompts-and-system-instructions',
    },
    {
      name: 'Rules Files para IDEs',
      description: 'Archivos de reglas específicos para diferentes IDEs que proporcionan contexto crítico a los LLMs.',
      features: [
        'Configuración para VS Code',
        'Configuración para Cursor',
        'Configuración para JetBrains',
        'Configuración para Firebase Studio'
      ],
      setup: 'Configura los archivos de reglas apropiados para tu IDE según la documentación oficial.',
      icon: '🔧',
      link: 'https://angular.dev/ai/develop-with-ai#rules-files', 
    }
  ];

  implementationExamples: ImplementationExample[] = [
    {
      title: 'Generación de Componente con IA',
      description: 'Ejemplo real de cómo Angular 20 genera un componente usando LLMs',
      code: `// Comando en terminal
ng generate component --ai "product-card"

// Resultado automático generado por IA:
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="product-card">
      <img [src]="product.image" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price | currency }}</p>
      <button (click)="addToCart()">Agregar al carrito</button>
    </div>
  \`,
  styles: [\`
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
    }
    .price { color: #2ecc71; font-weight: bold; }
  \`]
})
export class ProductCardComponent {
  product = input<Product>({ name: '', price: 0, image: '' });
  
  addToCart() {
    // Lógica para agregar al carrito
    console.log('Producto agregado:', this.product.name);
  }
}`,
      result: 'Componente generado automáticamente con template, estilos y lógica básica',
      icon: '⚡'
    },
    {
      title: 'Autocompletado Inteligente',
      description: 'Cómo funciona el autocompletado asistido por IA en Angular 20',
      code: `// Escribes esto:
@Component({
  selector: 'app-user-list',
  template: \`
    <div class="user-list">
      <div *ngFor="let user of users">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <button (click)="editUser(user)">Editar</button>
      </div>
    </div>
  \`
})
export class UserListComponent {
  // La IA sugiere automáticamente:
  users: User[] = [];
  
  editUser(user: User) {
    // Lógica para editar usuario
    console.log('Editando usuario:', user);
  }
  
  // También sugiere métodos adicionales:
  addUser() {
    // Lógica para agregar usuario
  }
  
  deleteUser(userId: string) {
    // Lógica para eliminar usuario
  }
}`,
      result: 'Sugerencias automáticas de propiedades y métodos basadas en el contexto',
      icon: '🤖'
    },
    {
      title: 'Debugging Asistido por IA',
      description: 'Ejemplo de cómo la IA ayuda a identificar y resolver errores',
      code: `// Código con error:
@Component({
  selector: 'app-form',
  template: \`
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="user.name" />
      <input [(ngModel)]="user.email" />
      <button type="submit">Enviar</button>
    </form>
  \`
})
export class FormComponent {
  user = { name: '', email: '' };
  
  onSubmit() {
    console.log(this.user);
  }
}

// La IA detecta y sugiere:
// ❌ Error: Falta importar FormsModule
// ✅ Solución: Agregar FormsModule a imports
// ✅ Sugerencia: Agregar validaciones
// ✅ Sugerencia: Manejar errores de formulario`,
      result: 'Detección automática de errores y sugerencias de solución',
      icon: '🐛'
    },
    {
      title: 'Generación de Tests Automática',
      description: 'Cómo Angular 20 genera tests automáticamente usando LLMs',
      code: `// La IA analiza el componente y genera tests:
describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    component.product = { name: 'Test Product', price: 100, image: 'test.jpg' };
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Test Product');
  });

  it('should call addToCart when button is clicked', () => {
    spyOn(console, 'log');
    component.product = { name: 'Test', price: 100, image: 'test.jpg' };
    fixture.detectChanges();
    
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    
    expect(console.log).toHaveBeenCalledWith('Producto agregado:', 'Test');
  });
});`,
      result: 'Tests completos generados automáticamente con casos de prueba relevantes',
      icon: '🧪'
    }
  ];

  selectedExample: LLMExample | null = null;

  selectExample(example: LLMExample) {
    this.selectedExample = example;
  }

  // Métodos para el componente de navegación
  onSectionClick(sectionId: string) {
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 