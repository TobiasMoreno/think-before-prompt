import { Component } from '@angular/core';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { SectionButtonsComponent } from '../../../ui/section-buttons/section-buttons.component';

@Component({
  selector: 'app-http',
  imports: [ SectionNavigationComponent, SectionButtonsComponent],
  templateUrl: './http.component.html',
})
export class HttpComponent {
  activeSection = 'intro';
  
  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🌐' },
    { id: 'setup', title: 'Configuración', icon: '⚙️' },
    { id: 'basic', title: 'Peticiones Básicas', icon: '📡' },
    { id: 'errors', title: 'Manejo de Errores', icon: '⚠️' },
    { id: 'interceptors', title: 'Interceptores', icon: '🔧' },
    { id: 'complete', title: 'Ejemplo Completo', icon: '🔄' },
  ];

  // Ejemplos de código
  setupExample = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Importante: agregar HttpClient
  ]
};

// En un servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  // Métodos del servicio...
}`;

  basicExample = `// Servicio básico de usuarios
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  http = inject(HttpClient);

  // GET - Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // GET - Obtener usuario por ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }

  // POST - Crear nuevo usuario
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // PUT - Actualizar usuario
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/\${id}\`, user);
  }

  // DELETE - Eliminar usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }

  // GET con parámetros de query
  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(\`\${this.apiUrl}?q=\${query}\`);
  }
}`;

  errorsExample = `import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      timeout(5000), // Timeout de 5 segundos
      retry(3), // Reintentar 3 veces
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = \`Error: \${error.error.message}\`;
    } else {
      // Error del lado del servidor
      switch (error.status) {
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 400:
          errorMessage = 'Solicitud incorrecta';
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = \`Error \${error.status}: \${error.message}\`;
      }
    }

    console.error('Error HTTP:', error);
    return throwError(() => new Error(errorMessage));
  }
}

// Uso en componente
@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngIf="loading">Cargando...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
    <div *ngIf="users">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';
  userService = inject(UserService);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = '';

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }
}`;

  interceptorExample = `// auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Obtener token del localStorage
    const token = localStorage.getItem('auth_token');
    
    if (token) {
      // Clonar la request y agregar el header de autorización
      request = request.clone({
        setHeaders: {
          Authorization: \`Bearer \${token}\`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token expirado o inválido
          localStorage.removeItem('auth_token');
          // Redirigir al login
          window.location.href = '/login';
        }
        return throwError(() => error);
      })
    );
  }
}

// logging.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    
    console.log('Request iniciada:', request.url);

    return next.handle(request).pipe(
      tap({
        next: (event) => {
          const duration = Date.now() - startTime;
          console.log(\`Request completada: \${request.url} (\${duration}ms)\`);
        },
        error: (error) => {
          const duration = Date.now() - startTime;
          console.error(\`Request falló: \${request.url} (\${duration}ms)\`, error);
        }
      })
    );
  }
}

// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loggingInterceptor } from './interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor])
    )
  ]
};`;

  // Ejemplos divididos del ejemplo completo
  completeInterfaces = `// interfaces/user.interface.ts
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}

export interface CreateUserDto {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  age?: number;
}`;

  completeService = `// services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { User, CreateUserDto, UpdateUserDto } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string>('');

  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  // GET - Obtener todos los usuarios con cache
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      shareReplay(1), // Cache la respuesta
      catchError(this.handleError.bind(this))
    );
  }

  // GET - Obtener usuario por ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // POST - Crear nuevo usuario
  createUser(userData: CreateUserDto): Observable<User> {
    this.setLoading(true);
    this.clearError();

    return this.http.post<User>(this.apiUrl, userData).pipe(
      map(user => {
        this.setLoading(false);
        return user;
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // PUT - Actualizar usuario
  updateUser(id: number, userData: UpdateUserDto): Observable<User> {
    this.setLoading(true);
    this.clearError();

    return this.http.put<User>(\`\${this.apiUrl}/\${id}\`, userData).pipe(
      map(user => {
        this.setLoading(false);
        return user;
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // DELETE - Eliminar usuario
  deleteUser(id: number): Observable<void> {
    this.setLoading(true);
    this.clearError();

    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`).pipe(
      map(() => {
        this.setLoading(false);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // Búsqueda de usuarios
  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(\`\${this.apiUrl}?q=\${query}\`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.setLoading(false);
    
    let errorMessage = 'Ocurrió un error inesperado';

    if (error.error instanceof ErrorEvent) {
      errorMessage = \`Error del cliente: \${error.error.message}\`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = 'Datos de entrada inválidos';
          break;
        case 401:
          errorMessage = 'No autorizado';
          break;
        case 403:
          errorMessage = 'Acceso denegado';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = \`Error \${error.status}: \${error.message}\`;
      }
    }

    this.setError(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  private setError(error: string): void {
    this.errorSubject.next(error);
  }

  private clearError(): void {
    this.errorSubject.next('');
  }
}`;

  completeComponent = `// components/user-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  template: \`
    <div class="user-list">
      <!-- Loading -->
      <div *ngIf="loading$ | async" class="loading">
        Cargando usuarios...
      </div>

      <!-- Error -->
      <div *ngIf="error$ | async as error" class="error">
        {{ error }}
        <button (click)="loadUsers()">Reintentar</button>
      </div>

      <!-- Users -->
      <div *ngIf="users.length > 0" class="users">
        <div *ngFor="let user of users" class="user-card">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <p>Edad: {{ user.age }}</p>
          <button (click)="editUser(user)">Editar</button>
          <button (click)="deleteUser(user.id)">Eliminar</button>
        </div>
      </div>

      <!-- Empty state -->
      <div *ngIf="!loading && !error && users.length === 0" class="empty">
        No hay usuarios disponibles
      </div>
    </div>
  \`
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading = false;
  error = '';

  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {
    this.userService.loading$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => this.loading = loading);

    this.userService.error$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(error => this.error = error);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUsers(): void {
    this.userService.getUsers().pipe(
      takeUntil(this.destroy$)
    ).subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: User): void {
    // Lógica para editar usuario
    console.log('Editando usuario:', user);
  }

  deleteUser(userId: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.deleteUser(userId).pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.loadUsers(); // Recargar lista
      });
    }
  }
}`;

  advancedExample = `// services/cache.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, Observable<any>>();

  http = inject(HttpClient);

  getCached<T>(url: string, fallback: () => Observable<T>): Observable<T> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const request = fallback().pipe(
      shareReplay(1),
      catchError(error => {
        this.cache.delete(url);
        return throwError(() => error);
      })
    );

    this.cache.set(url, request);
    return request;
  }

  clearCache(): void {
    this.cache.clear();
  }
}

// services/search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new Subject<string>();

  http = inject(HttpClient);

  search<T>(searchFn: (query: string) => Observable<T>): Observable<T> {
    return this.searchSubject.pipe(
      debounceTime(300), // Esperar 300ms después del último input
      distinctUntilChanged(), // Solo emitir si el valor cambió
      switchMap(query => searchFn(query))
    );
  }

  setSearchQuery(query: string): void {
    this.searchSubject.next(query);
  }
}

// services/cancellable.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CancellableService {
  private cancelSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      takeUntil(this.cancelSubject)
    );
  }

  cancelRequests(): void {
    this.cancelSubject.next();
  }
}

// interceptors/retry.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retryWhen, delay, take, concat } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen(errors => 
        errors.pipe(
          delay(1000), // Esperar 1 segundo
          take(3), // Máximo 3 intentos
          concat(throwError(() => new Error('Máximo de intentos alcanzado')))
        )
      )
    );
  }
}

// Uso en componentes
@Component({
  selector: 'app-advanced-search',
  template: \`
    <input 
      type="text" 
      placeholder="Buscar usuarios..."
      (input)="onSearch($event.target.value)">
    
    <div *ngIf="loading">Buscando...</div>
    <div *ngIf="users.length > 0">
      <div *ngFor="let user of users">{{ user.name }}</div>
    </div>
  \`
})
export class AdvancedSearchComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private searchService: SearchService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.searchService.search(query => 
      this.userService.searchUsers(query)
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }

  onSearch(query: string): void {
    this.loading = true;
    this.searchService.setSearchQuery(query);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`;

  copyCode(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const text = element.textContent || '';
      navigator.clipboard.writeText(text);
    }
  }

  onSectionClick(sectionId: string) {
    this.activeSection = sectionId;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 