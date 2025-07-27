import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../ui/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';

export interface PromptExample {
  title: string;
  badPrompt: string;
  goodPrompt: string;
  explanation: string;
  category: string;
}

export interface PromptTemplate {
  name: string;
  template: string;
  description: string;
  useCase: string;
}

@Component({
  selector: 'app-prompt-engineering',
  standalone: true,
  imports: [FormsModule, BreadcrumbComponent, ProgressBarComponent, SectionNavigationComponent],
  templateUrl: './prompt-engineering.component.html',
  styleUrls: ['./prompt-engineering.component.css']
})
export class PromptEngineeringComponent {
  // Secciones para navegación
  sections: NavigationSection[] = [
    { id: 'introduccion', title: 'Introducción', icon: '🎯' },
    { id: 'ejemplos', title: 'Ejemplos', icon: '📝' },
    { id: 'templates', title: 'Templates', icon: '📋' },
    { id: 'consejos', title: 'Consejos', icon: '💡' },
    { id: 'mejora', title: 'Mejora Prompts', icon: '🔧' }
  ];

  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: 'ia/what-is-ia' },
    { label: 'Prompt Engineering' }
  ];

  promptExamples: PromptExample[] = [
    {
      title: 'Generar código',
      badPrompt: 'haceme una función',
      goodPrompt: 'Crea una función en JavaScript que reciba un array de números y devuelva la suma de todos los elementos pares. Incluye manejo de errores y documentación JSDoc.',
      explanation: 'El prompt bueno especifica el lenguaje, los parámetros, el comportamiento esperado y requisitos adicionales.',
      category: 'Desarrollo'
    },
    {
      title: 'Análisis de texto',
      badPrompt: 'resumí esto',
      goodPrompt: 'Analiza este texto y crea un resumen de máximo 3 párrafos, destacando los puntos clave y manteniendo un tono profesional. El resumen debe ser comprensible para alguien sin conocimientos técnicos.',
      explanation: 'Especifica la longitud, el enfoque y el público objetivo.',
      category: 'Análisis'
    },
    {
      title: 'Corrección de errores',
      badPrompt: 'arregla este código',
      goodPrompt: 'Revisa este código en Python y identifica los errores de sintaxis y lógica. Proporciona la versión corregida con comentarios explicando cada cambio realizado.',
      explanation: 'Pide análisis específico y explicaciones de los cambios.',
      category: 'Debugging'
    },
    {
      title: 'Generar contenido',
      badPrompt: 'escribí un blog',
      goodPrompt: 'Escribe un artículo de blog de 800 palabras sobre "Inteligencia Artificial en la Educación" dirigido a profesores de secundaria. Incluye ejemplos prácticos, estadísticas recientes y consejos de implementación.',
      explanation: 'Define el público, longitud, tema específico y elementos requeridos.',
      category: 'Contenido'
    }
  ];

  promptTemplates: PromptTemplate[] = [
    {
      name: 'Template de Análisis',
      template: 'Analiza [CONTENIDO] desde la perspectiva de [PERSPECTIVA]. Proporciona:\n1. Puntos clave\n2. Posibles problemas\n3. Recomendaciones\n4. Ejemplos prácticos',
      description: 'Para análisis profundos de contenido',
      useCase: 'Análisis de código, documentos, artículos'
    },
    {
      name: 'Template de Generación',
      template: 'Genera [TIPO_DE_CONTENIDO] sobre [TEMA] que:\n- Sea apropiado para [AUDIENCIA]\n- Tenga [LONGITUD] palabras\n- Incluya [ELEMENTOS_REQUERIDOS]\n- Mantenga un tono [TONO]',
      description: 'Para crear contenido estructurado',
      useCase: 'Blogs, documentación, guías'
    },
    {
      name: 'Template de Debugging',
      template: 'Revisa este código en [LENGUAJE]:\n[CÓDIGO]\n\nIdentifica:\n1. Errores de sintaxis\n2. Problemas de lógica\n3. Mejoras de rendimiento\n4. Buenas prácticas faltantes\n\nProporciona la versión corregida con comentarios.',
      description: 'Para revisión y corrección de código',
      useCase: 'Debugging, code review, refactoring'
    },
    {
      name: 'Template de Comparación',
      template: 'Compara [CONCEPTO_A] y [CONCEPTO_B] considerando:\n- Diferencias principales\n- Casos de uso apropiados\n- Ventajas y desventajas\n- Ejemplos prácticos\n\nProporciona una recomendación final.',
      description: 'Para análisis comparativos',
      useCase: 'Evaluación de tecnologías, metodologías'
    }
  ];

  selectedCategory: string = 'todos';
  categories = ['todos', 'Desarrollo', 'Análisis', 'Debugging', 'Contenido'];

  userPrompt = '';
  improvedPrompt = '';

  improvePrompt() {
    if (!this.userPrompt.trim()) {
      this.improvedPrompt = '';
      return;
    }
    this.improvedPrompt = `Por favor, ${this.userPrompt.trim()} (agregá contexto, formato y público objetivo para mejores resultados).`;
  }

  get filteredExamples() {
    if (this.selectedCategory === 'todos') {
      return this.promptExamples;
    }
    return this.promptExamples.filter(example => example.category === this.selectedCategory);
  }

  // Métodos para el componente de navegación
  onSectionClick(sectionId: string) {
    console.log(`Sección clickeada: ${sectionId}`);
    this.scrollToSection(sectionId);
  }

  onSectionChange(sectionId: string) {
    console.log(`Sección cambiada: ${sectionId}`);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 