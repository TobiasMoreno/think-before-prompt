import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tool-card',
  imports: [],
  templateUrl: './tool-card.component.html',
  styleUrl: './tool-card.component.css'
})
export class ToolCardComponent {
  @Input() llmsTool: any
}
