import { Component } from '@angular/core';

export interface ComparativeCard {
  title: string;
  badUsage: string;
  goodUsage: string;
  example?: string;
  showExample: boolean;
}

@Component({
  selector: 'app-comparative-cards',
  templateUrl: './comparative-cards.component.html',
  styleUrls: ['./comparative-cards.component.css']
})
export class ComparativeCardsComponent {
  comparativeCards: ComparativeCard[] = [
    {
      title: 'Autocompletar código sin entenderlo',
      badUsage: 'Aceptar sugerencias de IA sin revisar ni comprender el código generado, lo que puede introducir errores o vulnerabilidades.',
      goodUsage: 'Revisar y entender cada sugerencia de la IA antes de integrarla, asegurándose de que cumple con los requisitos y buenas prácticas.',
      example: `// Ejemplo en Angular\n// Sugerencia de IA sin revisar\nthis.http.get('api/data').subscribe(data => this.doSomething(data)); // ¿Dónde está el manejo de errores?`,
      showExample: false
    },
    {
      title: 'Generar textos académicos y entregarlos tal cual',
      badUsage: 'Pedirle a la IA que escriba ensayos o trabajos y entregarlos sin modificaciones, lo que puede ser considerado plagio.',
      goodUsage: 'Usar la IA como apoyo para obtener ideas, estructura o referencias, pero redactar el trabajo final con tus propias palabras.',
      example: 'Situación: Copiar y pegar un ensayo generado por IA en vez de usarlo como inspiración.',
      showExample: false
    },
    {
      title: 'Usar IA para responder preguntas técnicas sin verificar',
      badUsage: 'Confiar ciegamente en respuestas técnicas de la IA y aplicarlas sin validarlas, lo que puede llevar a soluciones incorrectas.',
      goodUsage: 'Verificar la información proporcionada por la IA consultando documentación oficial o realizando pruebas antes de implementarla.',
      example: `// Ejemplo en Java\n// Respuesta IA sin verificar\nFile file = new File("data.txt");\nfile.delete(); // ¿Y si el archivo no existe? ¿Y el manejo de excepciones?`,
      showExample: false
    },
    {
      title: 'Automatizar decisiones éticas o sensibles',
      badUsage: 'Permitir que la IA tome decisiones críticas (como rechazar solicitudes de empleo) sin supervisión humana.',
      goodUsage: 'Utilizar la IA como herramienta de apoyo, pero mantener la revisión y decisión final en manos de personas responsables.',
      example: 'Situación: Un sistema de IA rechaza automáticamente candidatos sin revisión humana.',
      showExample: false
    },
    {
      title: 'Escribir prompts vagos o poco específicos',
      badUsage: 'Usar prompts genéricos como "hazme un resumen" o "escribe código" sin especificar contexto, formato o requisitos.',
      goodUsage: 'Escribir prompts detallados que incluyan contexto, formato esperado, público objetivo y requisitos específicos.',
      example: `❌ Mal: "hazme un resumen"\n✅ Bueno: "Resumí este texto en 3 puntos clave como si fuera para un alumno de secundaria"`,
      showExample: false
    },
    {
      title: 'No verificar alucinaciones de la IA',
      badUsage: 'Confiar en información factual proporcionada por la IA sin verificar su veracidad, especialmente en temas técnicos o científicos.',
      goodUsage: 'Siempre verificar información factual, fechas, estadísticas y referencias proporcionadas por la IA consultando fuentes confiables.',
      example: 'Situación: Usar estadísticas o datos históricos de la IA sin verificar en fuentes oficiales.',
      showExample: false
    },
    {
      title: 'Compartir información sensible con IA',
      badUsage: 'Enviar datos personales, contraseñas, información financiera o código propietario a herramientas de IA públicas.',
      goodUsage: 'Usar datos de ejemplo o información genérica, y nunca compartir información sensible o confidencial.',
      example: '❌ Mal: "Revisa este código que contiene credenciales de base de datos"\n✅ Bueno: "Revisa este patrón de código usando datos de ejemplo"',
      showExample: false
    },
    {
      title: 'Depender exclusivamente de la IA para decisiones',
      badUsage: 'Usar la IA como única fuente de verdad y tomar decisiones importantes basándose únicamente en sus respuestas.',
      goodUsage: 'Usar la IA como una herramienta de apoyo que complementa el juicio humano y la experiencia personal.',
      example: 'Situación: Elegir una tecnología solo porque la IA la recomendó, sin investigar alternativas.',
      showExample: false
    }
  ];
}
