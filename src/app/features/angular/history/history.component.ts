import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  timelineEvents = [
    {
      year: '2010',
      title: 'Nacimiento de AngularJS',
      description: 'Google desarrolla AngularJS (Angular 1.x) como un framework JavaScript para aplicaciones web dinámicas.',
      features: ['Two-way data binding', 'Directivas', 'Dependency Injection']
    },
    {
      year: '2014-2015',
      title: 'Evolución de AngularJS',
      description: 'AngularJS se vuelve muy popular pero comienza a mostrar limitaciones en aplicaciones complejas.',
      features: ['Gran adopción empresarial', 'Limitaciones de rendimiento', 'Problemas de escalabilidad']
    },
    {
      year: '2016',
      title: 'Angular 2 - Reescritura Completa',
      description: 'Google reescribe completamente Angular desde cero, introduciendo TypeScript y arquitectura moderna.',
      features: ['TypeScript como lenguaje principal', 'Componentes', 'Módulos', 'Servicios']
    },
    {
      year: '2017',
      title: 'Angular 4 y 5',
      description: 'Mejoras significativas en rendimiento y nuevas características.',
      features: ['Angular Universal', 'Animaciones mejoradas', 'HttpClient']
    },
    {
      year: '2018',
      title: 'Angular 6 y 7',
      description: 'Introducción de Angular CLI mejorado y nuevas herramientas de desarrollo.',
      features: ['Angular CLI', 'Angular Elements', 'Ivy Renderer (preview)']
    },
    {
      year: '2019',
      title: 'Angular 8 y 9',
      description: 'Lanzamiento del nuevo motor de renderizado Ivy y mejoras de rendimiento.',
      features: ['Ivy Renderer', 'Differential Loading', 'TypeScript 3.7']
    },
    {
      year: '2020',
      title: 'Angular 10 y 11',
      description: 'Mejoras en el ecosistema y herramientas de desarrollo.',
      features: ['Strict Mode', 'Angular Language Service', 'Webpack 5']
    },
    {
      year: '2021',
      title: 'Angular 12 y 13',
      description: 'Transición completa a Ivy y nuevas características modernas.',
      features: ['Ivy por defecto', 'View Engine deprecado', 'Angular Package Format']
    },
    {
      year: '2022',
      title: 'Angular 14 y 15',
      description: 'Introducción de características modernas y mejoras de desarrollador.',
      features: ['Standalone Components', 'Typed Forms', 'Injection Context']
    },
    {
      year: '2023',
      title: 'Angular 16 - Deprecación de Módulos',
      description: 'Angular 16 marca el inicio de la deprecación de NgModules, introduciendo standalone components como el futuro del framework.',
      features: ['Deprecación de NgModules', 'Standalone Components por defecto', 'Nuevo sistema de routing standalone']
    },
    {
      year: '2023',
      title: 'Angular 16 y 17',
      description: 'Nuevas características revolucionarias y mejoras de rendimiento.',
      features: ['Signals', 'Control Flow', 'Deferrable Views', 'SSR mejorado']
    },
    {
      year: '2024',
      title: 'Angular 17 - Eliminación de Módulos',
      description: 'Angular 17 elimina completamente el sistema de NgModules, estableciendo standalone components como la arquitectura estándar.',
      features: ['Eliminación completa de NgModules', 'Standalone components obligatorios', 'Nuevo CLI sin módulos', 'Nuevos input y output']
    },
    {
      year: '2024',
      title: 'Angular 18',
      description: 'Continuación de la evolución en la era post-módulos con nuevas características y mejoras.',
      features: ['Mejoras en Signals', 'Nuevas APIs', 'Mejor rendimiento', 'Arquitectura standalone consolidada']
    },
    {
      year: '2024',
      title: 'Angular 19',
      description: 'Nuevas características de rendimiento y mejoras en la experiencia de desarrollador.',
      features: ['Mejoras en Control Flow', 'Nuevas APIs de Signals', 'Mejor SSR']
    },
    {
      year: '2025',
      title: 'Angular 20',
      description: 'Revolución con la integración de LLMs y nuevas funcionalidades avanzadas.',
      features: ['Integración de LLMs', 'Nuevas características de Signals', 'Mejoras en rendimiento', 'APIs modernas']
    }
  ];
}
