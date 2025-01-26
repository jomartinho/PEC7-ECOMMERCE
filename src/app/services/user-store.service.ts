import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  private token: string | null = null;

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
