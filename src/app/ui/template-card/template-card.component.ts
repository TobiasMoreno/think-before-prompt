import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-card',
  imports: [],
  templateUrl: './template-card.component.html',
  styleUrl: './template-card.component.css'
})
export class TemplateCardComponent {
  @Input() templateDelimiters: any
  @Input() templatePrompt: any
}
