import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserStoreService } from './services/user-store.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleItemComponent } from './modules/article/article-list/article-item/article-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ArticleItemComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedArticle: any; 

  constructor(private userStore: UserStoreService, private router: Router) {}

  ngOnInit(): void {
    if (!this.userStore.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  changeView(view: string): void {
    console.log('Change view:', view); 
  }
}
