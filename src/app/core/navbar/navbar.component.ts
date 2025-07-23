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
  links = [
    { path: '/', label: 'Inicio' },
    { path: '/que-es-ia', label: '¿Qué es la IA?' },
    { path: '/ventajas', label: 'Ventajas' },
    { path: '/comparativa-ia', label: 'Casos de uso' },
    { path: '/rgas', label: 'RGAs' },
    { path: '/mcps', label: 'MCPs' },
    { path: '/ia-web', label: 'IA en web' },
    { path: '/etica', label: 'Ética' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/sobre-el-proyecto', label: 'Sobre el proyecto' },
  ];
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
