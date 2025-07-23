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
      title: 'Descubre la IA',
      description: 'Investiga qué es la inteligencia artificial y por qué es relevante.',
      tip: 'Lee un artículo introductorio sobre IA.',
      icon: '🔍',
      badge: '🎓'
    },
    {
      title: 'Identifica riesgos',
      description: 'Reflexiona sobre los posibles riesgos y malos usos de la IA.',
      tip: 'Piensa en un ejemplo real de mal uso de IA.',
      icon: '⚠️',
      badge: '🛡️'
    },
    {
      title: 'Practica buenas acciones',
      description: 'Aplica una buena práctica ética en el uso de IA.',
      tip: 'Consulta una guía de ética en IA.',
      icon: '✅',
      badge: '🏅'
    },
    {
      title: 'Aplica en un caso real',
      description: 'Implementa IA en un pequeño proyecto o simulación.',
      tip: 'Automatiza una tarea simple usando IA.',
      icon: '🛠️',
      badge: '🚀'
    },
    {
      title: 'Únete a la comunidad',
      description: 'Participa en un foro o grupo sobre IA.',
      tip: 'Comparte una duda o experiencia en una comunidad.',
      icon: '🤝',
      badge: '🌐'
    },
    {
      title: 'Mantente actualizado',
      description: 'Busca una noticia o avance reciente en IA.',
      tip: 'Sigue una fuente confiable de noticias de IA.',
      icon: '📈',
      badge: '📰'
    }
  ];
  completed: boolean[] = Array(this.missions.length).fill(false);

  toggleComplete(index: number) {
    this.completed[index] = !this.completed[index];
  }
}
