import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoadmapComponent } from '../../ui/roadmap/roadmap.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, RoadmapComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {} 