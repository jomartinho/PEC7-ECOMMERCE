import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(route: any): boolean {
    if (route.routeConfig?.path === 'login' && this.userStore.isAuthenticated()) {
      this.router.navigate(['/article/list']);
      return false;
    }

    if (this.userStore.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
