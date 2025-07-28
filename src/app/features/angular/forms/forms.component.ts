import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationSection, SectionNavigationComponent } from '../../../ui/section-navigation/section-navigation.component';
import { SectionButtonsComponent } from "../../../ui/section-buttons/section-buttons.component";

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule, SectionNavigationComponent, SectionButtonsComponent],
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {
  activeSection = 'template-driven';

  sections: NavigationSection[] = [
    { id: 'template-driven', title: 'Template-Driven Forms', icon: '📝' },
    { id: 'reactive', title: 'Reactive Forms', icon: '🔄' },
    { id: 'comparative', title: 'Comparative', icon: '⚖️' }
  ];

  // Datos para formulario template-driven
  templateFormData = {
    name: '',
    email: '',
    message: ''
  };

  // Formulario reactivo
  reactiveForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Establecer la sección activa inicial después de un pequeño delay
    setTimeout(() => {
      this.activeSection = 'template-driven';
    }, 100);
  }

  // Métodos para formulario template-driven
  onSubmitTemplate() {
    console.log('Formulario Template-Driven:', this.templateFormData);
    alert('Formulario Template-Driven enviado: ' + JSON.stringify(this.templateFormData, null, 2));
  }

  // Métodos para formulario reactivo
  onSubmitReactive() {
    if (this.reactiveForm.valid) {
      console.log('Formulario Reactivo:', this.reactiveForm.value);
      alert('Formulario Reactivo enviado: ' + JSON.stringify(this.reactiveForm.value, null, 2));
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.reactiveForm.controls).forEach(key => {
      const control = this.reactiveForm.get(key);
      control?.markAsTouched();
    });
  }

  // Getters para validaciones
  get nameError() {
    const control = this.reactiveForm.get('name');
    return control?.invalid && control?.touched;
  }

  get emailError() {
    const control = this.reactiveForm.get('email');
    return control?.invalid && control?.touched;
  }

  get messageError() {
    const control = this.reactiveForm.get('message');
    return control?.invalid && control?.touched;
  }

  onSectionClick(sectionId: string) {
    console.log(`Sección clickeada: ${sectionId}`);
    this.activeSection = sectionId;
    this.scrollToSection(sectionId);
  }
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 