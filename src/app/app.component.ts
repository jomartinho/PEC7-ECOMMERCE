import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar (selectView)="changeView($event)"></app-navbar>
    <app-article-list *ngIf="currentView === 'list'"></app-article-list>
    <app-article-new-template *ngIf="currentView === 'template'"></app-article-new-template>
    <app-article-new-reactive *ngIf="currentView === 'reactive'"></app-article-new-reactive>
  `,
  imports: [
    CommonModule,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent
  ]
})
export class AppComponent {
  currentView: string = 'list';

  changeView(view: string) {
    this.currentView = view;
  }
}
