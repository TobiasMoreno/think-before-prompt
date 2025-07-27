import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, SidebarComponent, FooterComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
    sidebarService = inject(SidebarService);
} 