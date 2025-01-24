import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ArticleListComponent },
  { path: 'template', component: ArticleNewTemplateComponent },
  { path: 'reactive', component: ArticleNewReactiveComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
];
