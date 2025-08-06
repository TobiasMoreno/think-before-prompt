import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [],
  templateUrl: './example-card.component.html',
  styleUrl: './example-card.component.css'
})
export class ExampleCardComponent {
  @Input() delimiterExample: any
  @Input() toolExample: any
  @Input() promptExample: any
  @Input() llmsExample: any
}
