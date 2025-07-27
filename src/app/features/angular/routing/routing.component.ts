import { Component, OnInit, HostListener } from '@angular/core';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterLink, SectionNavigationComponent],
  templateUrl: './routing.component.html',
})
export class RoutingComponent implements OnInit {
  activeSection = 'intro';
  
  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🛣️' },
    { id: 'basic', title: 'Routing Básico', icon: '🚀' },
    { id: 'params', title: 'Parámetros', icon: '📝' },
    { id: 'guards', title: 'Guards', icon: '🛡️' },
    { id: 'lazy', title: 'Lazy Loading', icon: '⚡' },
    { id: 'advanced', title: 'Avanzado', icon: '🎯' }
  ];

  // Ejemplos de código
  basicRoutingExample = `// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent }
];

// app.config.ts
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};`;

  navigationExample = `// Navegación declarativa
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        Inicio
      </a>
      <a routerLink="/about" routerLinkActive="active">Acerca de</a>
      <a routerLink="/users" routerLinkActive="active">Usuarios</a>
      <a [routerLink]="['/user', userId]" routerLinkActive="active">
        Mi Perfil
      </a>
    </nav>
  \`
})
export class NavComponent {
  userId = '123';
}

// Navegación programática
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <button (click)="login()">Iniciar Sesión</button>
  \`
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Lógica de login...
    this.router.navigate(['/dashboard']);
    
    // Con parámetros
    this.router.navigate(['/user', '123'], {
      queryParams: { tab: 'profile' }
    });
  }
}`;

  paramsExample = `// Definir ruta con parámetros
export const routes: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'product/:category/:id', component: ProductDetailComponent }
];

// Obtener parámetros
@Component({
  selector: 'app-user-detail',
  standalone: true,
  template: \`
    <div>
      <h2>Usuario {{ userId }}</h2>
      <p>Nombre: {{ userName }}</p>
    </div>
  \`
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  userName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener parámetros de ruta
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.loadUser(this.userId);
    });

    // Obtener query parameters
    this.route.queryParams.subscribe(params => {
      console.log('Query params:', params);
    });
  }

  private loadUser(id: string) {
    // Cargar datos del usuario...
  }
}`;

  guardsExample = `// Guard de autenticación
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// Guard de autorización
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.hasRole('admin');
  }
}

// Aplicar guards
export const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];`;

  lazyLoadingExample = `// Lazy loading de módulo
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

// En el módulo hijo (admin.module.ts)
const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AdminModule {}

// Lazy loading de componente standalone
export const routes: Routes = [
  {
    path: 'feature',
    loadComponent: () => import('./feature/feature.component').then(m => m.FeatureComponent)
  }
];`;

  advancedExample = `// Resolvers para precargar datos
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUser(userId!);
  }
}

// Aplicar resolver
export const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  }
];

// En el componente
@Component({
  selector: 'app-user-detail',
  standalone: true,
  template: \`
    <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserDetailComponent {
  user: User;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.data['user'];
  }
}

// CanDeactivate Guard
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('¿Deseas salir sin guardar?');
    }
    return true;
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
