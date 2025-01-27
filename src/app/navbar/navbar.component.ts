import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <button (click)="onSelectView('list')" routerLink="/list" routerLinkActive="active">Inicio</button>
    <button (click)="onSelectView('list')" routerLink="/list" routerLinkActive="active">Artículos</button>
    <button (click)="onSelectView('template')" routerLink="/template" routerLinkActive="active">Nuevo artículo template</button>
    <button (click)="onSelectView('reactive')" routerLink="/reactive" routerLinkActive="active">Nuevo artículo reactivo</button>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() selectView = new EventEmitter<string>();

  onSelectView(view: string): void {
    this.selectView.emit(view);
  }
}