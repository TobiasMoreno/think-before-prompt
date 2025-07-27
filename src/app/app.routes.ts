import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/ia/home/home.component').then(m => m.HomeComponent) },
      
      // Rutas de IA
      { path: 'ia', loadComponent: () => import('./features/ia/home/home.component').then(m => m.HomeComponent) },
      { path: 'ia/what-is-ia', loadComponent: () => import('./features/ia/generative-ai/generative-ai.component').then(m => m.GenerativeAiComponent) },
      { path: 'ia/advantages', loadComponent: () => import('./features/ia/advantages/advantages.component').then(m => m.AdvantagesComponent) },
      { path: 'ia/prompt-engineering', loadComponent: () => import('./features/ia/prompt-engineering/prompt-engineering.component').then(m => m.PromptEngineeringComponent) },
      { path: 'ia/tools', loadComponent: () => import('./features/ia/tools/tools.component').then(m => m.ToolsComponent) },
      { path: 'ia/llms', loadComponent: () => import('./features/ia/llms/llms.component').then(m => m.LLMsComponent) },
      { path: 'ia/ia-web', loadComponent: () => import('./features/ia/web-dev-cases/web-dev-cases.component').then(m => m.WebDevCasesComponent) },
      { path: 'ia/mcps', loadComponent: () => import('./features/ia/mcps/mcps.component').then(m => m.McpsComponent) },
      { path: 'ia/rgas', loadComponent: () => import('./features/ia/rgas/rgas.component').then(m => m.RgasComponent) },
      { path: 'ia/comparative-ia', loadComponent: () => import('./features/ia/comparative-cards/comparative-cards.component').then(m => m.ComparativeCardsComponent) },
      
      // Rutas de Angular
      { path: 'angular/fundamentals', loadComponent: () => import('./features/angular/fundamentals/fundamentals.component').then(m => m.FundamentalsComponent) },
      { path: 'angular/inputs-outputs', loadComponent: () => import('./features/angular/inputs-outputs/inputs-outputs.component').then(m => m.InputsOutputsComponent) },
      { path: 'angular/components', loadComponent: () => import('./features/angular/components/components.component').then(m => m.AngularComponentesComponent) },
      { path: 'angular/services', loadComponent: () => import('./features/angular/services/services.component').then(m => m.AngularServiciosComponent) },
      { path: 'angular/routing', loadComponent: () => import('./features/angular/routing/routing.component').then(m => m.AngularRoutingComponent) },
      { path: 'angular/forms', loadComponent: () => import('./features/angular/forms/forms.component').then(m => m.FormsComponent) },
      { path: 'angular/http-client', loadComponent: () => import('./features/angular/http/http.component').then(m => m.AngularHttpComponent) },
      { path: 'angular/history', loadComponent: () => import('./features/angular/history/history.component').then(m => m.HistoryComponent) },
      
      // Ruta sobre el proyecto
      { path: 'about-the-project', loadComponent: () => import('./features/about-project/about-project.component').then(m => m.AboutProjectComponent) },
    ]
  },
  { path: 'hero', loadComponent: () => import('./features/ia/hero/hero.component').then(m => m.HeroComponent) },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
