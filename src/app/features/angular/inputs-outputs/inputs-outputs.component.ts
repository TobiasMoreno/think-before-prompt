import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionNavigationComponent, NavigationSection } from '../../../ui/section-navigation/section-navigation.component';

@Component({
  selector: 'app-inputs-outputs',
  imports: [RouterModule, SectionNavigationComponent],
  templateUrl: './inputs-outputs.component.html',
})
export class InputsOutputsComponent {
  activeSection = 'intro';
  
  sections: NavigationSection[] = [
    { id: 'intro', title: 'Introducción', icon: '🎯' },
    { id: 'inputs', title: 'Inputs', icon: '📥' },
    { id: 'outputs', title: 'Outputs', icon: '📤' },
    { id: 'complete', title: 'Ejemplo Completo', icon: '🔄' },
    { id: 'advanced', title: 'Patrones Avanzados', icon: '⚡' }
  ];

  // Ejemplos de código
  inputExample = `// Componente Hijo
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <p>Edad: {{ user.age }}</p>
      <button (click)="onEdit()">Editar</button>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: any;
  @Input() showAge = true;
  
  onEdit() {
    console.log('Editando usuario:', this.user);
  }
}

// Uso en Componente Padre
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  template: \`
    <div>
      <h2>Lista de Usuarios</h2>
      <app-user-card 
        *ngFor="let user of users"
        [user]="user"
        [showAge]="true">
      </app-user-card>
    </div>
  \`
})
export class UserListComponent {
  users = [
    { name: 'Juan', email: 'juan@email.com', age: 25 },
    { name: 'María', email: 'maria@email.com', age: 30 }
  ];
}`;

  outputExample = `// Componente Hijo
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="user.name" placeholder="Nombre">
      <input [(ngModel)]="user.email" placeholder="Email">
      <button type="submit">Guardar</button>
    </form>
  \`
})
export class UserFormComponent {
  @Output() userSaved = new EventEmitter<any>();
  @Output() formCancelled = new EventEmitter<void>();
  
  user = { name: '', email: '' };
  
  onSubmit() {
    if (this.user.name && this.user.email) {
      this.userSaved.emit(this.user);
      this.user = { name: '', email: '' };
    }
  }
  
  onCancel() {
    this.formCancelled.emit();
  }
}

// Uso en Componente Padre
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserFormComponent],
  template: \`
    <div>
      <h2>Gestión de Usuarios</h2>
      <app-user-form
        (userSaved)="handleUserSaved($event)"
        (formCancelled)="handleFormCancelled()">
      </app-user-form>
    </div>
  \`
})
export class UserManagementComponent {
  handleUserSaved(user: any) {
    console.log('Usuario guardado:', user);
    // Lógica para guardar usuario
  }
  
  handleFormCancelled() {
    console.log('Formulario cancelado');
    // Lógica para cancelar
  }
}`;

  completeExample = `// Interface para tipado
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Componente Hijo - Lista de Usuarios
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="user-list">
      <h3>{{ title }}</h3>
      <div class="users">
        <div 
          *ngFor="let user of users; trackBy: trackByUserId"
          class="user-item"
          [class.selected]="selectedUserId === user.id"
          (click)="selectUser(user)">
          <h4>{{ user.name }}</h4>
          <p>{{ user.email }}</p>
          <p>Edad: {{ user.age }}</p>
          <button (click)="editUser(user)">Editar</button>
          <button (click)="deleteUser(user.id)">Eliminar</button>
        </div>
      </div>
    </div>
  \`
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Input() title = 'Lista de Usuarios';
  @Input() selectedUserId?: number;
  
  @Output() userSelected = new EventEmitter<User>();
  @Output() userEdited = new EventEmitter<User>();
  @Output() userDeleted = new EventEmitter<number>();
  
  selectUser(user: User) {
    this.userSelected.emit(user);
  }
  
  editUser(user: User) {
    this.userEdited.emit(user);
  }
  
  deleteUser(userId: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userDeleted.emit(userId);
    }
  }
  
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}

// Componente Padre - Gestión de Usuarios
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserListComponent],
  template: \`
    <div class="user-management">
      <h2>Gestión de Usuarios</h2>
      
      <app-user-list
        [users]="users"
        [title]="'Usuarios Activos'"
        [selectedUserId]="selectedUserId"
        (userSelected)="onUserSelected($event)"
        (userEdited)="onUserEdited($event)"
        (userDeleted)="onUserDeleted($event)">
      </app-user-list>
      
      <div class="selected-user" *ngIf="selectedUser">
        <h3>Usuario Seleccionado</h3>
        <p><strong>Nombre:</strong> {{ selectedUser.name }}</p>
        <p><strong>Email:</strong> {{ selectedUser.email }}</p>
        <p><strong>Edad:</strong> {{ selectedUser.age }}</p>
      </div>
    </div>
  \`
})
export class UserManagementComponent {
  users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@email.com', age: 25 },
    { id: 2, name: 'María García', email: 'maria@email.com', age: 30 },
    { id: 3, name: 'Carlos López', email: 'carlos@email.com', age: 28 }
  ];
  
  selectedUserId?: number;
  selectedUser?: User;
  
  onUserSelected(user: User) {
    this.selectedUser = user;
    this.selectedUserId = user.id;
    console.log('Usuario seleccionado:', user);
  }
  
  onUserEdited(user: User) {
    console.log('Editando usuario:', user);
    // Lógica para abrir formulario de edición
  }
  
  onUserDeleted(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
    if (this.selectedUserId === userId) {
      this.selectedUser = undefined;
      this.selectedUserId = undefined;
    }
    console.log('Usuario eliminado:', userId);
  }
}`;

  copyCode(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const text = element.textContent || '';
      navigator.clipboard.writeText(text);
    }
  }

  onSectionClick(sectionId: string) {
    this.activeSection = sectionId;
  }

} 