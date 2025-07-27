import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/ia/home/home.component').then(m => m.HomeComponent) },
      { path: 'que-es-ia', loadComponent: () => import('./features/ia/generative-ai/generative-ai.component').then(m => m.GenerativeAiComponent) },
      { path: 'ventajas', loadComponent: () => import('./features/ia/advantages/advantages.component').then(m => m.AdvantagesComponent) },
      { path: 'prompt-engineering', loadComponent: () => import('./features/ia/prompt-engineering/prompt-engineering.component').then(m => m.PromptEngineeringComponent) },
      { path: 'herramientas', loadComponent: () => import('./features/ia/tools/tools.component').then(m => m.ToolsComponent) },
      { path: 'llms', loadComponent: () => import('./features/ia/llms/llms.component').then(m => m.LLMsComponent) },
      { path: 'ia-web', loadComponent: () => import('./features/ia/web-dev-cases/web-dev-cases.component').then(m => m.WebDevCasesComponent) },
      { path: 'sobre-el-proyecto', loadComponent: () => import('./features/about-project/about-project.component').then(m => m.AboutProjectComponent) },
      { path: 'mcps', loadComponent: () => import('./features/ia/mcps/mcps.component').then(m => m.McpsComponent) },
      { path: 'rgas', loadComponent: () => import('./features/ia/rgas/rgas.component').then(m => m.RgasComponent) },
      { path: 'comparativa-ia', loadComponent: () => import('./features/ia/comparative-cards/comparative-cards.component').then(m => m.ComparativeCardsComponent) },
      
      // Rutas de Angular
      { path: 'angular-fundamentos', loadComponent: () => import('./features/angular/angular-fundamentos/angular-fundamentos.component').then(m => m.AngularFundamentosComponent) },
      { path: 'angular-componentes', loadComponent: () => import('./features/angular/components/components.component').then(m => m.AngularComponentesComponent) },
      { path: 'angular-servicios', loadComponent: () => import('./features/angular/services/services.component').then(m => m.AngularServiciosComponent) },
      { path: 'angular-routing', loadComponent: () => import('./features/angular/routing/routing.component').then(m => m.AngularRoutingComponent) },
      { path: 'angular-formularios', loadComponent: () => import('./features/angular/forms/forms.component').then(m => m.FormsComponent) },
      { path: 'angular-http', loadComponent: () => import('./features/angular/http/http.component').then(m => m.AngularHttpComponent) },
    ]
  },
  { path: 'hero', loadComponent: () => import('./features/ia/hero/hero.component').then(m => m.HeroComponent) },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
