import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../ui/progress-bar/progress-bar.component';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../ui/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';
import { ExampleCardComponent } from '../../../ui/example-card/example-card.component';
import { TemplateCardComponent } from '../../../ui/template-card/template-card.component';
import { UseCaseCardComponent } from '../../../ui/use-case-card/use-case-card.component';

export interface DelimiterExample {
  title: string;
  description: string;
  delimiter: string;
  example: string;
  useCase: string;
  category: string;
}

export interface DelimiterTemplate {
  name: string;
  template: string;
  description: string;
  useCase: string;
}

export interface RealUseCase {
  title: string;
  scenario: string;
  problem: string;
  solution: string;
  prompt: string;
  category: string;
}

@Component({
  selector: 'app-delimiters',
  standalone: true,
  imports: [FormsModule, BreadcrumbComponent, ProgressBarComponent, SectionNavigationComponent, ExampleCardComponent, TemplateCardComponent, UseCaseCardComponent],
  templateUrl: './delimiters.component.html'
})
export class DelimitersComponent {
  // Secciones para navegación
  sections: NavigationSection[] = [
    { id: 'introduccion', title: 'Introducción', icon: '🎯' },
    { id: 'ejemplos', title: 'Ejemplos Prácticos', icon: '💡' },
    { id: 'templates', title: 'Templates', icon: '📝' },
    { id: 'casos-reales', title: 'Casos Reales', icon: '🎯' },
  ];

  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: '¿Qué es la IA?', path: 'what-is-ia' },
    { label: 'Delimitadores' }
  ];

  delimiterExamples: DelimiterExample[] = [
    {
      title: 'Código con Triple Backticks',
      description: 'Para delimitar bloques de código con sintaxis highlighting',
      delimiter: '```javascript',
      example: '```javascript\nfunction saludar() {\n  return "Hola mundo";\n}\n```',
      useCase: 'Análisis de código, debugging, explicaciones técnicas',
      category: 'Código'
    },
    {
      title: 'Texto con Comillas',
      description: 'Para delimitar texto específico o citas',
      delimiter: '"texto"',
      example: '"Este es un texto específico que quiero que analices"',
      useCase: 'Análisis de texto, corrección gramatical, traducción',
      category: 'Texto'
    },
    {
      title: 'Datos con Llaves',
      description: 'Para estructurar datos JSON o información organizada',
      delimiter: '{datos}',
      example: '{\n  "nombre": "Juan",\n  "edad": 25,\n  "profesion": "Desarrollador"\n}',
      useCase: 'Análisis de datos, validación, transformación',
      category: 'Datos'
    },
    {
      title: 'Listas con Guiones',
      description: 'Para crear listas estructuradas',
      delimiter: '- elemento',
      example: '- Primer elemento\n- Segundo elemento\n- Tercer elemento',
      useCase: 'Organización de información, listas de tareas, pasos',
      category: 'Listas'
    },
    {
      title: 'Instrucciones con Corchetes',
      description: 'Para especificar instrucciones o parámetros',
      delimiter: '[instrucción]',
      example: 'Analiza este código [en español] y proporciona [3 mejoras específicas]',
      useCase: 'Especificación de parámetros, instrucciones claras',
      category: 'Instrucciones'
    },
    {
      title: 'XML Tags',
      description: 'Para estructurar información jerárquica',
      delimiter: '<tag>contenido</tag>',
      example: '<usuario>\n  <nombre>María</nombre>\n  <email>maria@ejemplo.com</email>\n</usuario>',
      useCase: 'Datos estructurados, configuración, metadatos',
      category: 'Estructurado'
    }
  ];

  delimiterTemplates: DelimiterTemplate[] = [
    {
      name: 'Template de Análisis de Código',
      template: 'Analiza el siguiente código en [LENGUAJE]:\n\n```[LENGUAJE]\n[CÓDIGO]\n```\n\nProporciona:\n1. [ANÁLISIS_1]\n2. [ANÁLISIS_2]\n3. [ANÁLISIS_3]',
      description: 'Para análisis estructurado de código con delimitadores claros',
      useCase: 'Code review, debugging, explicaciones técnicas'
    },
    {
      name: 'Template de Análisis de Datos',
      template: 'Analiza estos datos:\n\n```json\n[DATOS_JSON]\n```\n\nIdentifica:\n- [PATRÓN_1]\n- [PATRÓN_2]\n- [RECOMENDACIÓN]',
      description: 'Para análisis de datos estructurados',
      useCase: 'Análisis de datos, validación, transformación'
    },
    {
      name: 'Template de Comparación',
      template: 'Compara estos dos elementos:\n\n**Elemento A:**\n```\n[ELEMENTO_A]\n```\n\n**Elemento B:**\n```\n[ELEMENTO_B]\n```\n\nProporciona una comparación detallada.',
      description: 'Para comparaciones estructuradas con delimitadores',
      useCase: 'Comparación de tecnologías, metodologías, enfoques'
    },
    {
      name: 'Template de Instrucciones Específicas',
      template: 'Realiza la siguiente tarea:\n\n**Contexto:**\n[TEXTO_CONTEXTO]\n\n**Instrucciones:**\n- [INSTRUCCIÓN_1]\n- [INSTRUCCIÓN_2]\n- [INSTRUCCIÓN_3]\n\n**Formato de salida:**\n[FORMATO_ESPERADO]',
      description: 'Para instrucciones claras y estructuradas',
      useCase: 'Tareas específicas, análisis detallado, generación de contenido'
    }
  ];

  realUseCases: RealUseCase[] = [
    {
      title: 'Debugging de Código Legacy',
      scenario: 'Eres un desarrollador que debe mantener código legacy en JavaScript',
      problem: 'El código tiene errores pero no entiendes la lógica del negocio',
      solution: 'Usar delimitadores para separar el código problemático del contexto del negocio',
      prompt: 'Analiza este código legacy:\n\n```javascript\n[CÓDIGO_PROBLEMÁTICO]\n```\n\n**Contexto del negocio:**\n"El sistema maneja transacciones financieras de clientes premium"\n\n**Problema reportado:**\n"Los usuarios ven saldos incorrectos después de las 3 PM"\n\nIdentifica:\n1. [POSIBLE_CAUSA]\n2. [SOLUCIÓN_RECOMENDADA]\n3. [CÓDIGO_CORREGIDO]',
      category: 'Debugging'
    },
    {
      title: 'Migración de Base de Datos',
      scenario: 'Necesitas migrar datos de MySQL a PostgreSQL',
      problem: 'Los tipos de datos y sintaxis son diferentes entre sistemas',
      solution: 'Usar delimitadores para estructurar la información de ambos sistemas',
      prompt: 'Ayúdame a migrar esta estructura de MySQL a PostgreSQL:\n\n**Estructura MySQL:**\n```sql\n[ESQUEMA_MYSQL]\n```\n\n**Datos de ejemplo:**\n```json\n[DATOS_EJEMPLO]\n```\n\n**Requerimientos:**\n- Mantener integridad referencial\n- Optimizar para consultas frecuentes\n- Compatible con aplicaciones existentes\n\nGenera:\n1. [ESQUEMA_POSTGRESQL]\n2. [SCRIPT_MIGRACIÓN]\n3. [VALIDACIONES_NECESARIAS]',
      category: 'Migración'
    },
    {
      title: 'Análisis de Logs de Producción',
      scenario: 'Tu aplicación en producción tiene errores intermitentes',
      problem: 'Los logs son extensos y difíciles de analizar',
      solution: 'Usar delimitadores para estructurar el análisis de logs',
      prompt: 'Analiza estos logs de producción:\n\n**Logs de Error:**\n```\n[LOGS_ERROR]\n```\n\n**Logs de Performance:**\n```\n[LOGS_PERFORMANCE]\n```\n\n**Configuración del Sistema:**\n```json\n[CONFIG_SISTEMA]\n```\n\nIdentifica:\n- [PATRÓN_DE_ERROR]\n- [CAUSA_RAÍZ]\n- [SOLUCIÓN_INMEDIATA]\n- [PREVENCIÓN_FUTURA]',
      category: 'Análisis'
    },
    {
      title: 'Refactoring de API',
      scenario: 'Necesitas refactorizar una API REST a GraphQL',
      problem: 'La API actual tiene problemas de performance y mantenibilidad',
      solution: 'Usar delimitadores para estructurar el análisis y la migración',
      prompt: 'Refactoriza esta API REST a GraphQL:\n\n**Endpoints REST actuales:**\n```json\n[ENDPOINTS_REST]\n```\n\n**Esquemas de datos:**\n```json\n[ESQUEMAS_DATOS]\n```\n\n**Casos de uso principales:**\n- [CASO_USO_1]\n- [CASO_USO_2]\n- [CASO_USO_3]\n\nGenera:\n1. [ESQUEMA_GRAPHQL]\n2. [RESOLVERS_NECESARIOS]\n3. [MIGRACIÓN_GRADUAL]\n4. [TESTING_STRATEGY]',
      category: 'Refactoring'
    },
    {
      title: 'Optimización de Consultas SQL',
      scenario: 'Tu aplicación tiene consultas SQL lentas en producción',
      problem: 'Las consultas complejas están afectando la performance',
      solution: 'Usar delimitadores para analizar y optimizar las consultas',
      prompt: 'Optimiza estas consultas SQL:\n\n**Consultas lentas:**\n```sql\n[CONSULTAS_LENTAS]\n```\n\n**Estructura de tablas:**\n```sql\n[ESTRUCTURA_TABLAS]\n```\n\n**Métricas de performance:**\n```json\n[MÉTRICAS_PERFORMANCE]\n```\n\n**Requerimientos:**\n- Mantener funcionalidad existente\n- Mejorar tiempo de respuesta\n- Reducir uso de recursos\n\nProporciona:\n1. [CONSULTAS_OPTIMIZADAS]\n2. [ÍNDICES_RECOMENDADOS]\n3. [MONITOREO_SUGERIDO]',
      category: 'Optimización'
    },
    {
      title: 'Integración de Microservicios',
      scenario: 'Necesitas integrar múltiples microservicios',
      problem: 'Los servicios tienen diferentes formatos de datos y APIs',
      solution: 'Usar delimitadores para estructurar la integración',
      prompt: 'Integra estos microservicios:\n\n**Servicio A (Users):**\n```json\n[API_USERS]\n```\n\n**Servicio B (Orders):**\n```json\n[API_ORDERS]\n```\n\n**Servicio C (Payments):**\n```json\n[API_PAYMENTS]\n```\n\n**Flujo de negocio:**\n"Un usuario crea una orden y debe pagar"\n\nDiseña:\n1. [ARQUITECTURA_INTEGRACIÓN]\n2. [PATRÓN_COMUNICACIÓN]\n3. [MANEJO_ERRORES]\n4. [MONITOREO_DISTRIBUIDO]',
      category: 'Integración'
    },
    {
      title: 'Análisis de Seguridad',
      scenario: 'Debes auditar la seguridad de tu aplicación web',
      problem: 'Hay múltiples puntos de entrada y vulnerabilidades potenciales',
      solution: 'Usar delimitadores para estructurar el análisis de seguridad',
      prompt: 'Audita la seguridad de esta aplicación:\n\n**Código de autenticación:**\n```javascript\n[CÓDIGO_AUTH]\n```\n\n**Configuración de servidor:**\n```json\n[CONFIG_SERVIDOR]\n```\n\n**Endpoints públicos:**\n```json\n[ENDPOINTS_PÚBLICOS]\n```\n\n**Datos sensibles:**\n"Información de tarjetas de crédito y datos personales"\n\nIdentifica:\n- [VULNERABILIDADES_CRÍTICAS]\n- [VULNERABILIDADES_MEDIAS]\n- [RECOMENDACIONES_SEGURIDAD]\n- [IMPLEMENTACIÓN_MEJORAS]',
      category: 'Seguridad'
    },
    {
      title: 'Testing de APIs',
      scenario: 'Necesitas crear tests automatizados para una API compleja',
      problem: 'La API tiene múltiples endpoints con diferentes formatos de respuesta',
      solution: 'Usar delimitadores para estructurar los casos de prueba',
      prompt: 'Crea tests para esta API:\n\n**Especificación de la API:**\n```json\n[SPEC_API]\n```\n\n**Casos de uso críticos:**\n```json\n[CASOS_USO_CRÍTICOS]\n```\n\n**Datos de prueba:**\n```json\n[DATOS_PRUEBA]\n```\n\n**Requerimientos de testing:**\n- Cobertura del 90%\n- Tests de integración\n- Tests de performance\n- Tests de seguridad\n\nGenera:\n1. [TESTS_UNITARIOS]\n2. [TESTS_INTEGRACIÓN]\n3. [TESTS_E2E]\n4. [MOCK_DATA]',
      category: 'Testing'
    }
  ];

  selectedCategory: string = 'todos';
  categories = ['todos', 'Código', 'Texto', 'Datos', 'Listas', 'Instrucciones', 'Estructurado'];

  selectedRealUseCaseCategory: string = 'todos';
  realUseCaseCategories = ['todos', 'Debugging', 'Migración', 'Análisis', 'Refactoring', 'Optimización', 'Integración', 'Seguridad', 'Testing'];

  get filteredExamples() {
    if (this.selectedCategory === 'todos') {
      return this.delimiterExamples;
    }
    return this.delimiterExamples.filter(example => example.category === this.selectedCategory);
  }

  get filteredRealUseCases() {
    if (this.selectedRealUseCaseCategory === 'todos') {
      return this.realUseCases;
    }
    return this.realUseCases.filter(useCase => useCase.category === this.selectedRealUseCaseCategory);
  }

  // Métodos para el componente de navegación
  onSectionClick(sectionId: string) {
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
