import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/list', component: ArticleListComponent },
  {
    path: 'article/create',
    component: ArticleNewReactiveComponent,
    canActivate: [AuthGuard],
  },
  { path: 'article/:id', component: ArticleDetailComponent },
];
