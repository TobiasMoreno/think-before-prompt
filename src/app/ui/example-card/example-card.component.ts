import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [],
  templateUrl: './example-card.component.html',
  styleUrl: './example-card.component.css'
})
export class ExampleCardComponent {
  @Input() example: any
  @Input() tool: any
}
