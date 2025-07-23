import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'que-es-ia', loadComponent: () => import('./features/generative-ai/generative-ai.component').then(m => m.GenerativeAiComponent) },
      { path: 'ventajas', loadComponent: () => import('./features/advantages/advantages.component').then(m => m.AdvantagesComponent) },
      { path: 'malos-usos', loadComponent: () => import('./features/bad-practices/bad-practices.component').then(m => m.BadPracticesComponent) },
      { path: 'buenos-usos', loadComponent: () => import('./features/good-practices/good-practices.component').then(m => m.GoodPracticesComponent) },
      { path: 'ia-web', loadComponent: () => import('./features/web-dev-cases/web-dev-cases.component').then(m => m.WebDevCasesComponent) },
      { path: 'etica', loadComponent: () => import('./features/ethics/ethics.component').then(m => m.EthicsComponent) },
      { path: 'sobre-el-proyecto', loadComponent: () => import('./features/about-project/about-project.component').then(m => m.AboutProjectComponent) },
      { path: 'mcps', loadComponent: () => import('./features/mcps/mcps.component').then(m => m.McpsComponent) },
      { path: 'rgas', loadComponent: () => import('./features/rgas/rgas.component').then(m => m.RgasComponent) },
      { path: 'recursos', loadComponent: () => import('./features/resources/resources.component').then(m => m.ResourcesComponent) },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
