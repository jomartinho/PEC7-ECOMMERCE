import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'article',
    loadChildren: () => import('./modules/article/article.module').then((m) => m.ArticleModule),
  },
];
