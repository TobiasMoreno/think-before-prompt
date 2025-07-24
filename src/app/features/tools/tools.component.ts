import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../ui/breadcrumb/breadcrumb.component';

export interface Tool {
  name: string;
  type: string;
  description: string;
  features: string[];
  bestFor: string[];
  link: string;
  icon: string;
}

@Component({
  selector: 'app-tools',
  imports: [RouterLink, ProgressBarComponent, BreadcrumbComponent],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: '/que-es-ia' },
    { label: 'Prompt Engineering', path: '/prompt-engineering' },
    { label: 'Herramientas' }
  ];

  tools: Tool[] = [
    {
      name: 'ChatGPT',
      type: 'Asistente general',
      description: 'El modelo más popular de OpenAI, excelente para conversaciones generales y generación de texto.',
      features: [
        'Conversaciones naturales',
        'Generación de código',
        'Análisis de texto',
        'Traducción',
        'Resúmenes'
      ],
      bestFor: [
        'Aprendizaje general',
        'Generación de contenido',
        'Debugging de código',
        'Análisis de documentos'
      ],
      link: 'https://chat.openai.com',
      icon: '🤖'
    },
    {
      name: 'Cursor',
      type: 'Editor de código con IA',
      description: 'Editor de código basado en VS Code con IA integrada para autocompletado y generación de código.',
      features: [
        'Autocompletado inteligente',
        'Generación de código',
        'Refactoring automático',
        'Debugging asistido',
        'Documentación automática'
      ],
      bestFor: [
        'Desarrollo de software',
        'Programación en equipo',
        'Aprendizaje de nuevos lenguajes',
        'Optimización de código'
      ],
      link: 'https://cursor.sh',
      icon: '💻'
    },
    {
      name: 'Claude',
      type: 'IA generativa general',
      description: 'Modelo de Anthropic conocido por su razonamiento lógico y análisis detallado.',
      features: [
        'Razonamiento lógico',
        'Análisis profundo',
        'Escritura creativa',
        'Resolución de problemas',
        'Análisis de código'
      ],
      bestFor: [
        'Análisis complejo',
        'Investigación',
        'Escritura académica',
        'Resolución de problemas'
      ],
      link: 'https://claude.ai',
      icon: '🧠'
    },
    {
      name: 'Gemini',
      type: 'IA + búsqueda + código',
      description: 'Modelo de Google que combina IA generativa con capacidades de búsqueda web.',
      features: [
        'Búsqueda web integrada',
        'Generación de código',
        'Análisis de imágenes',
        'Información actualizada',
        'Integración con Google'
      ],
      bestFor: [
        'Investigación actualizada',
        'Análisis de datos',
        'Información en tiempo real',
        'Desarrollo con documentación'
      ],
      link: 'https://gemini.google.com',
      icon: '🔍'
    },
    {
      name: 'Poe',
      type: 'Multimodelo',
      description: 'Plataforma de Quora que permite acceder a múltiples modelos de IA en un solo lugar.',
      features: [
        'Múltiples modelos',
        'Comparación de respuestas',
        'Chatbots personalizados',
        'Comunidad activa',
        'Integración fácil'
      ],
      bestFor: [
        'Comparar modelos',
        'Experimentar con IA',
        'Crear chatbots',
        'Comunidad de usuarios'
      ],
      link: 'https://poe.com',
      icon: '🌐'
    },
    {
      name: 'GitHub Copilot',
      type: 'Asistente de código',
      description: 'Asistente de IA específicamente diseñado para programadores, integrado en IDEs.',
      features: [
        'Autocompletado de código',
        'Generación de tests',
        'Documentación automática',
        'Refactoring inteligente',
        'Integración con GitHub'
      ],
      bestFor: [
        'Desarrollo profesional',
        'Equipos de desarrollo',
        'Productividad en código',
        'Integración con Git'
      ],
      link: 'https://github.com/features/copilot',
      icon: '🚀'
    }
  ];

  selectedCategory: string = 'todos';
  categories = ['todos', 'Asistentes generales', 'Herramientas de código', 'Multimodelo'];

  get filteredTools() {
    if (this.selectedCategory === 'todos') {
      return this.tools;
    }
    if (this.selectedCategory === 'Asistentes generales') {
      return this.tools.filter(tool => 
        tool.type.includes('general') || tool.type.includes('Asistente')
      );
    }
    if (this.selectedCategory === 'Herramientas de código') {
      return this.tools.filter(tool => 
        tool.type.includes('código') || tool.type.includes('Editor') || tool.name.includes('Copilot')
      );
    }
    if (this.selectedCategory === 'Multimodelo') {
      return this.tools.filter(tool => 
        tool.type.includes('Multimodelo') || tool.type.includes('búsqueda')
      );
    }
    return this.tools;
  }

  get assistantsCount() {
    return this.tools.filter(tool => 
      tool.type.includes('general') || tool.type.includes('Asistente')
    ).length;
  }

  get codeToolsCount() {
    return this.tools.filter(tool => 
      tool.type.includes('código') || tool.type.includes('Editor') || tool.name.includes('Copilot')
    ).length;
  }

  get multiModelCount() {
    return this.tools.filter(tool => 
      tool.type.includes('Multimodelo') || tool.type.includes('búsqueda')
    ).length;
  }
} 