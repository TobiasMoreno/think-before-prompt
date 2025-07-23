import { Component } from '@angular/core';

export interface ComparativeCard {
  title: string;
  badUsage: string;
  goodUsage: string;
  example?: string;
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
      example: `// Ejemplo en Angular\n// Sugerencia de IA sin revisar\nthis.http.get('api/data').subscribe(data => this.doSomething(data)); // ¿Dónde está el manejo de errores?`
    },
    {
      title: 'Generar textos académicos y entregarlos tal cual',
      badUsage: 'Pedirle a la IA que escriba ensayos o trabajos y entregarlos sin modificaciones, lo que puede ser considerado plagio.',
      goodUsage: 'Usar la IA como apoyo para obtener ideas, estructura o referencias, pero redactar el trabajo final con tus propias palabras.',
      example: 'Situación: Copiar y pegar un ensayo generado por IA en vez de usarlo como inspiración.'
    },
    {
      title: 'Usar IA para responder preguntas técnicas sin verificar',
      badUsage: 'Confiar ciegamente en respuestas técnicas de la IA y aplicarlas sin validarlas, lo que puede llevar a soluciones incorrectas.',
      goodUsage: 'Verificar la información proporcionada por la IA consultando documentación oficial o realizando pruebas antes de implementarla.',
      example: `// Ejemplo en Java\n// Respuesta IA sin verificar\nFile file = new File("data.txt");\nfile.delete(); // ¿Y si el archivo no existe? ¿Y el manejo de excepciones?`
    },
    {
      title: 'Automatizar decisiones éticas o sensibles',
      badUsage: 'Permitir que la IA tome decisiones críticas (como rechazar solicitudes de empleo) sin supervisión humana.',
      goodUsage: 'Utilizar la IA como herramienta de apoyo, pero mantener la revisión y decisión final en manos de personas responsables.',
      example: 'Situación: Un sistema de IA rechaza automáticamente candidatos sin revisión humana.'
    }
  ];
}
