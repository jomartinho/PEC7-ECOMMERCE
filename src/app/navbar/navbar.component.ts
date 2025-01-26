import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  template: `
    <button routerLink="/list" routerLinkActive="active">Inicio</button>
    <button routerLink="/list" routerLinkActive="active">Artículos</button>
    <button routerLink="/template" routerLinkActive="active">Nuevo artículo template</button>
    <button routerLink="/reactive" routerLinkActive="active">Nuevo artículo reactivo</button>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
