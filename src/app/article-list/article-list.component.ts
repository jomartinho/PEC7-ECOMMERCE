import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ArticleService } from '../article-service.service';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  template: `
    <div>
      <input
        type="text"
        placeholder="Search articles"
        (input)="onSearch($event)"
      />
    </div>
    <ul>
      <li *ngFor="let article of articles$ | async" class="article">
        <app-article-item
          [article]="article"
          (quantityChange)="handleQuantityChange($event)"
        ></app-article-item>
      </li>
    </ul>
  `,
  imports: [CommonModule, ArticleItemComponent],
  styles: [
    `
      .article {
        margin-bottom: 20px;
      }

      input {
        margin-bottom: 20px;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
    this.articleService.getArticles().subscribe();
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.trim();
    this.articleService.getArticles(query).subscribe();
  }

  handleQuantityChange(change: { article: Article; quantity: number }): void {
    this.articleService
      .changeQuantity(change.article.id, change.quantity - change.article.quantityInCart)
      .subscribe();
  }
}
