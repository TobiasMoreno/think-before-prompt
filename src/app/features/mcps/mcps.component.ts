import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../ui/breadcrumb/breadcrumb.component';

export interface LearningStep {
  id: number;
  title: string;
  description: string;
  action: string;
  estimatedTime: string;
  icon: string;
  status: 'completed' | 'current' | 'pending';
}

export interface MCPTechnique {
  name: string;
  description: string;
  difficulty: string;
  icon: string;
  example: string;
  benefits: string[];
}

export interface MCPExample {
  title: string;
  category: string;
  prompt: string;
  response: string;
  explanation: string;
}

@Component({
  selector: 'app-mcps',
  imports: [DecimalPipe, RouterLink, ProgressBarComponent, BreadcrumbComponent],
  templateUrl: './mcps.component.html',
  styleUrl: './mcps.component.css'
})
export class McpsComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: '/que-es-ia' },
    { label: 'Prompt Engineering', path: '/prompt-engineering' },
    { label: 'Herramientas', path: '/herramientas' },
    { label: 'LLMs y Angular 20', path: '/llms' },
    { label: 'MCPs' }
  ];

  currentStep = 1;
  totalSteps = 6;
  showProgress = false;

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get currentLearningStep(): LearningStep {
    return this.learningSteps.find(step => step.id === this.currentStep) || this.learningSteps[0];
  }

  learningSteps: LearningStep[] = [
    {
      id: 1,
      title: 'Introducción a MCPs',
      description: 'Entiende qué son y por qué son importantes',
      action: 'Leer y comprender',
      estimatedTime: '10 min',
      icon: '🎯',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Prompt Engineering',
      description: 'Fundamentos de escritura de prompts efectivos',
      action: 'Practicar prompts',
      estimatedTime: '15 min',
      icon: '✍️',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Técnicas de Control',
      description: 'Aprende técnicas específicas de MCPs',
      action: 'Experimentar técnicas',
      estimatedTime: '20 min',
      icon: '🎛️',
      status: 'current'
    },
    {
      id: 4,
      title: 'Ejemplos Prácticos',
      description: 'Ve ejemplos reales de MCPs en acción',
      action: 'Analizar ejemplos',
      estimatedTime: '15 min',
      icon: '💡',
      status: 'pending'
    },
    {
      id: 5,
      title: 'Casos de Uso',
      description: 'Aplica MCPs a situaciones reales',
      action: 'Resolver casos',
      estimatedTime: '25 min',
      icon: '🚀',
      status: 'pending'
    },
    {
      id: 6,
      title: 'Mejores Prácticas',
      description: 'Consolida tu conocimiento con mejores prácticas',
      action: 'Revisar y practicar',
      estimatedTime: '15 min',
      icon: '✅',
      status: 'pending'
    }
  ];

  availableTechniques: MCPTechnique[] = [
    {
      name: 'Few-Shot Learning',
      description: 'Proporciona ejemplos específicos para guiar la respuesta del modelo',
      difficulty: 'Básico',
      icon: '🎯',
      example: 'Aquí tienes 3 ejemplos de cómo responder. Ahora responde de manera similar...',
      benefits: [
        'Mejora la precisión de las respuestas',
        'Reduce ambigüedades',
        'Establece patrones claros'
      ]
    },
    {
      name: 'Chain of Thought',
      description: 'Pide al modelo que piense paso a paso antes de dar la respuesta final',
      difficulty: 'Intermedio',
      icon: '🧠',
      example: 'Piensa paso a paso: primero analiza el problema, luego identifica las opciones...',
      benefits: [
        'Mejora el razonamiento lógico',
        'Reduce errores de cálculo',
        'Proporciona transparencia en el proceso'
      ]
    },
    {
      name: 'Role Prompting',
      description: 'Asigna un rol específico al modelo para obtener respuestas más contextualizadas',
      difficulty: 'Básico',
      icon: '🎭',
      example: 'Actúa como un experto en seguridad informática y analiza este código...',
      benefits: [
        'Respuestas más especializadas',
        'Mejor contexto profesional',
        'Mayor precisión técnica'
      ]
    },
    {
      name: 'Output Formatting',
      description: 'Especifica exactamente el formato de salida que esperas',
      difficulty: 'Básico',
      icon: '📋',
      example: 'Responde en formato JSON con los campos: nombre, edad, profesión...',
      benefits: [
        'Facilita el procesamiento posterior',
        'Consistencia en las respuestas',
        'Integración más fácil con sistemas'
      ]
    },
    {
      name: 'Temperature Control',
      description: 'Ajusta la creatividad vs precisión del modelo',
      difficulty: 'Intermedio',
      icon: '🌡️',
      example: 'Usa temperatura baja (0.1) para respuestas precisas, alta (0.9) para creativas',
      benefits: [
        'Control sobre la creatividad',
        'Balance entre precisión e innovación',
        'Adaptación al tipo de tarea'
      ]
    },
    {
      name: 'System Messages',
      description: 'Define el comportamiento base del modelo con instrucciones del sistema',
      difficulty: 'Avanzado',
      icon: '⚙️',
      example: 'Eres un asistente útil que siempre responde de manera precisa y segura...',
      benefits: [
        'Comportamiento consistente',
        'Mayor control sobre el modelo',
        'Personalización del asistente'
      ]
    }
  ];

  availableExamples: MCPExample[] = [
    {
      title: 'Generación de Código Seguro',
      category: 'Desarrollo',
      prompt: `Actúa como un desarrollador senior experto en seguridad. 
Genera una función en JavaScript que valide un email, siguiendo estas reglas:
- Debe contener @ y un dominio válido
- No debe permitir caracteres peligrosos
- Debe retornar true/false
- Incluye comentarios explicativos

Responde solo con el código, sin explicaciones adicionales.`,
      response: `function validateEmail(email) {
  // Verificar que contenga @
  if (!email.includes('@')) return false;
  
  // Verificar que no contenga caracteres peligrosos
  const dangerousChars = /[<>\"'&]/;
  if (dangerousChars.test(email)) return false;
  
  // Verificar formato básico de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}`,
      explanation: 'El prompt usa role prompting (desarrollador senior), especifica reglas claras, pide formato específico (solo código) y establece criterios de seguridad.'
    },
    {
      title: 'Análisis de Sentimientos',
      category: 'Análisis',
      prompt: `Analiza el sentimiento del siguiente texto. 
Responde en formato JSON con estos campos:
- sentimiento: "positivo", "negativo" o "neutral"
- confianza: número del 0 al 1
- palabras_clave: array de palabras que influyen en el sentimiento

Texto: "Este producto es increíble, me encanta cómo funciona aunque es un poco caro."`,
      response: `{
  "sentimiento": "positivo",
  "confianza": 0.85,
  "palabras_clave": ["increíble", "encanta", "caro"]
}`,
      explanation: 'Usa output formatting específico (JSON), few-shot learning implícito con la estructura, y especifica campos exactos para la respuesta.'
    },
    {
      title: 'Resolución de Problemas',
      category: 'Lógica',
      prompt: `Resuelve este problema paso a paso:

Problema: Un cliente tiene 3 productos en su carrito. El primero cuesta $10, el segundo $15, y el tercero $20. Hay un descuento del 10% en compras superiores a $40.

Paso 1: Calcula el total sin descuento
Paso 2: Determina si aplica el descuento
Paso 3: Calcula el precio final
Paso 4: Proporciona la respuesta final

Responde solo con números, sin texto adicional.`,
      response: `Paso 1: 10 + 15 + 20 = 45
Paso 2: 45 > 40, sí aplica descuento
Paso 3: 45 * 0.9 = 40.5
Paso 4: 40.5`,
      explanation: 'Implementa chain of thought (paso a paso), especifica formato de salida (solo números) y establece criterios claros para cada paso.'
    }
  ];

  selectedTechnique: MCPTechnique | null = null;
  selectedExample: MCPExample | null = null;

  toggleProgress() {
    this.showProgress = !this.showProgress;
  }

  goToStep(stepId: number) {
    this.currentStep = stepId;
    this.updateStepStatus();
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateStepStatus();
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateStepStatus();
    }
  }

  updateStepStatus() {
    this.learningSteps.forEach(step => {
      if (step.id < this.currentStep) {
        step.status = 'completed';
      } else if (step.id === this.currentStep) {
        step.status = 'current';
      } else {
        step.status = 'pending';
      }
    });
  }

  selectTechnique(technique: MCPTechnique) {
    this.selectedTechnique = technique;
  }

  selectExample(example: MCPExample) {
    this.selectedExample = example;
  }
}
