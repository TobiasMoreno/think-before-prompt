import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;
  
  leftLinks = [
    { path: '/ventajas', label: 'Ventajas' },
    { path: '/prompt-engineering', label: 'Prompt Engineering' },
    { path: '/herramientas', label: 'Herramientas' },
    { path: '/comparativa-ia', label: 'Casos de uso' },
  ];
  
  rightLinks = [
    { path: '/ia-web', label: 'IA en web' },
    { path: '/llms', label: 'LLMs' },
    { path: '/mcps', label: 'MCPs' },
    { path: '/sobre-el-proyecto', label: 'Sobre el proyecto' },
  ];
  
  allLinks = [
    ...this.leftLinks,
    { path: '/que-es-ia', label: '¿Qué es la IA?' },
    ...this.rightLinks,
  ];
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
