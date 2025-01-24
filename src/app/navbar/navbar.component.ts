import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <button (click)="onSelectView('list')">Inicio</button>
    <button (click)="onSelectView('list')">Artículos</button>
    <button (click)="onSelectView('template')">Nuevo artículo template</button>
    <button (click)="onSelectView('reactive')">Nuevo artículo reactivo</button>
  `
})
export class NavbarComponent {
  @Output() selectView = new EventEmitter<string>();

  onSelectView(view: string) {
    this.selectView.emit(view);
  }
}
