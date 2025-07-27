import { Component, OnInit, HostListener } from '@angular/core';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [SectionNavigationComponent, RouterLink],
  templateUrl: './services.component.html',
})
export class AngularServiciosComponent implements OnInit {
  activeSection = 'intro';

  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🔧' },
    { id: 'creation', title: 'Creación', icon: '⚙️' },
    { id: 'injection', title: 'Inyección', icon: '💉' },
    { id: 'http', title: 'HTTP Services', icon: '🌐' },
    { id: 'advanced', title: 'Avanzado', icon: '🚀' }
  ];

  // Ejemplos de código
  basicServiceExample = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];

  getData(): any[] {
    return this.data;
  }

  addData(item: any): void {
    this.data.push(item);
  }

  clearData(): void {
    this.data = [];
  }
}`;

  serviceWithHttpExample = `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  private http = inject(HttpClient);

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(\`\${this.apiUrl}/\${id}\`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(\`\${this.apiUrl}/\${id}\`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(\`\${this.apiUrl}/\${id}\`);
  }
}`;

  componentUsingServiceExample = `import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user-list',
  template: \`
    <div>
      <h2>Usuarios</h2>
      <ul>
        @for (user of users; track user.id) {
          <li>{{ user.name }}</li>
        }
      </ul>
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  dataService = inject(DataService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.dataService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
}`;

  providedInExample = `// Servicio con providedIn: 'root' (Singleton global)
@Injectable({
  providedIn: 'root'
})
export class GlobalService { }

// Servicio con providedIn: 'any' (Nueva instancia por módulo)
@Injectable({
  providedIn: 'any'
})
export class ModuleService { }

// Servicio con providedIn: NgModule (Específico del módulo)
@Injectable({
  providedIn: AppModule
})
export class AppSpecificService { }`;

  asyncServiceExample = `import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  private cache = new Map<string, any>();

  getDataWithCache(key: string): Observable<any> {
    if (this.cache.has(key)) {
      return of(this.cache.get(key));
    }

    return this.fetchData(key).pipe(
      delay(1000) // Simular delay de red
    );
  }

  private fetchData(key: string): Observable<any> {
    // Simular llamada HTTP
    const data = { id: key, value: Math.random() };
    this.cache.set(key, data);
    return of(data);
  }

  clearCache(): void {
    this.cache.clear();
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

  onSectionClick(sectionId: string) {
    console.log(`Sección clickeada: ${sectionId}`);
    this.scrollToSection(sectionId);
  }

  onSectionChange(sectionId: string) {
    console.log(`Sección cambiada: ${sectionId}`);
    this.activeSection = sectionId;
  }
} 