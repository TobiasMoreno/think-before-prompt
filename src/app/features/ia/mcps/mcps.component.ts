import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../ui/breadcrumb/breadcrumb.component';

export interface MCPTechnique {
  name: string;
  description: string;
  difficulty: string;
  icon: string;
  example: string;
  benefits: string[];
}

export interface RealUseCase {
  title: string;
  scenario: string;
  problem: string;
  solution: string;
  prompt: string;
  category: string;
  benefits: string[];
}

@Component({
  selector: 'app-mcps',
  imports: [ProgressBarComponent, BreadcrumbComponent],
  templateUrl: './mcps.component.html',
  styleUrl: './mcps.component.css'
})
export class McpsComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: '/what-is-ia' },
    { label: 'Delimitadores', path: '/delimiters' },
    { label: 'Prompt Engineering', path: '/prompt-engineering' },
    { label: 'Herramientas', path: '/tools' },
    { label: 'LLMs y Angular 20', path: '/llms' },
    { label: 'MCPs' }
  ];

  mcpTechniques: MCPTechnique[] = [
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

  realUseCases: RealUseCase[] = [
    {
      title: 'Generación de Código Seguro',
      scenario: 'Necesitas generar código JavaScript que valide entradas de usuario',
      problem: 'El modelo genera código vulnerable o no sigue las mejores prácticas de seguridad',
      solution: 'Usar role prompting con especificaciones de seguridad y formato de salida',
      prompt: `Actúa como un desarrollador senior experto en seguridad. 
Genera una función en JavaScript que valide un email, siguiendo estas reglas:
- Debe contener @ y un dominio válido
- No debe permitir caracteres peligrosos
- Debe retornar true/false
- Incluye comentarios explicativos

Responde solo con el código, sin explicaciones adicionales.`,
      category: 'Desarrollo',
      benefits: [
        'Código más seguro y robusto',
        'Sigue mejores prácticas de seguridad',
        'Formato consistente para integración',
        'Reducción de vulnerabilidades'
      ]
    },
    {
      title: 'Análisis de Datos Estructurado',
      scenario: 'Necesitas analizar sentimientos de texto de manera consistente',
      problem: 'Las respuestas son inconsistentes y difíciles de procesar programáticamente',
      solution: 'Usar output formatting específico con few-shot learning',
      prompt: `Analiza el sentimiento del siguiente texto. 
Responde en formato JSON con estos campos:
- sentimiento: "positivo", "negativo" o "neutral"
- confianza: número del 0 al 1
- palabras_clave: array de palabras que influyen en el sentimiento

Texto: "Este producto es increíble, me encanta cómo funciona aunque es un poco caro."`,
      category: 'Análisis',
      benefits: [
        'Formato consistente para procesamiento',
        'Datos estructurados fáciles de usar',
        'Análisis más preciso y confiable',
        'Integración directa con APIs'
      ]
    },
    {
      title: 'Resolución de Problemas Complejos',
      scenario: 'Debes resolver un problema matemático o lógico complejo',
      problem: 'El modelo da respuestas incorrectas sin mostrar el proceso de razonamiento',
      solution: 'Usar chain of thought con formato de salida específico',
      prompt: `Resuelve este problema paso a paso:

Problema: Un cliente tiene 3 productos en su carrito. El primero cuesta $10, el segundo $15, y el tercero $20. Hay un descuento del 10% en compras superiores a $40.

Paso 1: Calcula el total sin descuento
Paso 2: Determina si aplica el descuento
Paso 3: Calcula el precio final
Paso 4: Proporciona la respuesta final

Responde solo con números, sin texto adicional.`,
      category: 'Lógica',
      benefits: [
        'Razonamiento paso a paso transparente',
        'Reducción de errores de cálculo',
        'Proceso verificable y auditable',
        'Respuestas más confiables'
      ]
    },
    {
      title: 'Generación de Contenido Especializado',
      scenario: 'Necesitas contenido técnico para documentación o blogs',
      problem: 'El contenido es genérico y no se adapta al nivel técnico del público objetivo',
      solution: 'Usar role prompting con especificaciones de formato y nivel técnico',
      prompt: `Actúa como un experto en Angular 20 con 10 años de experiencia.

Escribe una guía paso a paso sobre "Cómo implementar lazy loading en Angular 20" para desarrolladores intermedios.

Formato requerido:
- Título principal
- Introducción (2-3 párrafos)
- Pasos numerados con código de ejemplo
- Conclusión con mejores prácticas

Incluye ejemplos de código reales y explicaciones claras.`,
      category: 'Contenido',
      benefits: [
        'Contenido adaptado al público objetivo',
        'Información técnica precisa y actualizada',
        'Formato consistente y profesional',
        'Mayor credibilidad y autoridad'
      ]
    }
  ];
}
