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
      title: 'IA Generativa y LLMs',
      description: 'Comprende cómo funcionan herramientas como ChatGPT, Gemini o Copilot.',
      tip: 'Investiga qué son los tokens, contexto y entrenamiento.',
      icon: '🟨',
      badge: '🧠'
    },
    {
      title: 'Prompt Engineering',
      description: 'Aprende a escribir mejores instrucciones para obtener mejores respuestas.',
      tip: 'Practica con diferentes tipos de prompts.',
      icon: '🟩',
      badge: '🎯'
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
    },
    {
      title: 'Explora Herramientas',
      description: 'Prueba diferentes herramientas de IA para encontrar las que mejor te sirvan.',
      tip: 'Experimenta con ChatGPT, Cursor, Claude y otras.',
      icon: '🛠️',
      badge: '⚡'
    }
  ];
  completed: boolean[] = Array(this.missions.length).fill(false);

  toggleComplete(index: number) {
    this.completed[index] = !this.completed[index];
  }
}
