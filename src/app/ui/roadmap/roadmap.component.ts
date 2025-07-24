import { Component } from '@angular/core';

interface Mission {
  title: string;
  description: string;
  tip: string;
  icon: string;
  badge: string;
}

@Component({
  selector: 'app-roadmap',
  imports: [],
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
})
export class RoadmapComponent {
  missions: Mission[] = [
    {
      title: '¿Qué es la IA?',
      description: 'Entiende qué significa "inteligencia artificial", para qué sirve y qué no es.',
      tip: 'Lee sobre la diferencia entre IA tradicional y generativa.',
      icon: '🟦',
      badge: '🎓'
    },
    {
      title: 'Prompt Engineering',
      description: 'Aprende a escribir mejores instrucciones para obtener mejores respuestas.',
      tip: 'Practica con diferentes tipos de prompts.',
      icon: '🟩',
      badge: '🎯'
    },
    {
      title: 'Herramientas de IA',
      description: 'Descubre las mejores herramientas para potenciar tu trabajo con IA.',
      tip: 'Experimenta con diferentes herramientas según tus necesidades.',
      icon: '🛠️',
      badge: '⚡'
    },
    {
      title: 'LLMs y Angular 20',
      description: 'Comprende cómo los LLMs están transformando el desarrollo con Angular 20.',
      tip: 'Investiga la integración nativa de IA en frameworks modernos.',
      icon: '🧠',
      badge: '🚀'
    },
    {
      title: 'MCPs (Model Context Protocol)',
      description: 'Aprende técnicas avanzadas para controlar y optimizar las respuestas de IA.',
      tip: 'Practica con técnicas de control de prompting para resultados más precisos.',
      icon: '🎛️',
      badge: '🎛️'
    },
    {
      title: 'Aplicaciones Reales',
      description: 'Usa IA para tareas reales, especialmente como desarrollador.',
      tip: 'Genera código, crea tests o analiza contenido.',
      icon: '🟧',
      badge: '🚀'
    },
    {
      title: 'Pensamiento Crítico',
      description: 'Usa la IA con criterio, sabiendo cuándo confiar y cuándo revisar.',
      tip: 'Aprende sobre alucinaciones y uso responsable.',
      icon: '🟥',
      badge: '🛡️'
    }
  ];
  completed: boolean[] = Array(this.missions.length).fill(false);

  toggleComplete(index: number) {
    this.completed[index] = !this.completed[index];
  }
}
