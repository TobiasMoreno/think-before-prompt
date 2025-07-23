import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'que-es-ia', loadComponent: () => import('./features/generative-ai/generative-ai.component').then(m => m.GenerativeAiComponent) },
      { path: 'ventajas', loadComponent: () => import('./features/advantages/advantages.component').then(m => m.AdvantagesComponent) },
      { path: 'prompt-engineering', loadComponent: () => import('./features/prompt-engineering/prompt-engineering.component').then(m => m.PromptEngineeringComponent) },
      { path: 'herramientas', loadComponent: () => import('./features/tools/tools.component').then(m => m.ToolsComponent) },
      { path: 'llms', loadComponent: () => import('./features/llms/llms.component').then(m => m.LLMsComponent) },
      { path: 'ia-web', loadComponent: () => import('./features/web-dev-cases/web-dev-cases.component').then(m => m.WebDevCasesComponent) },
      { path: 'sobre-el-proyecto', loadComponent: () => import('./features/about-project/about-project.component').then(m => m.AboutProjectComponent) },
      { path: 'mcps', loadComponent: () => import('./features/mcps/mcps.component').then(m => m.McpsComponent) },
      { path: 'rgas', loadComponent: () => import('./features/rgas/rgas.component').then(m => m.RgasComponent) },
      { path: 'comparativa-ia', loadComponent: () => import('./features/comparative-cards/comparative-cards.component').then(m => m.ComparativeCardsComponent) },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
