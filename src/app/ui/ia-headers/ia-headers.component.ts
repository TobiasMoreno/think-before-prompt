import { Component, Input } from '@angular/core';
import { AdvantagesComponent } from '../../features/ia/advantages/advantages.component';

@Component({
  selector: 'app-ia-headers',
  imports: [],
  templateUrl: './ia-headers.component.html',
  styleUrl: './ia-headers.component.css'
})
export class IaHeadersComponent {
  @Input()title: string = ''
  @Input() descripcion: string = ''
  @Input() icon: string= ''
}
