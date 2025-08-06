import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-use-case-card',
  imports: [],
  templateUrl: './use-case-card.component.html',
  styleUrl: './use-case-card.component.css'
})
export class UseCaseCardComponent {
  @Input() useCase: any
}
