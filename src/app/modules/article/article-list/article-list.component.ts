import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article-service.service';
import { Article } from '../../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';

@Component({
  selector: 'app-article-list',
  standalone: true, 
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  searchTerm: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.fetchArticles();
    });
  }

  fetchArticles(): void {
    this.articleService.getArticles(this.searchTerm).subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  handleQuantityChange(event: { article: Article; quantity: number }): void {
    const articleIndex = this.articles.findIndex(a => a.id === event.article.id);
    if (articleIndex !== -1) {
      this.articles[articleIndex].quantityInCart = event.quantity;
      console.log(`Updated article ${event.article.id} to quantity ${event.quantity}`);
    }
  }
  

  onSearch(term: string): void {
    this.searchTerm = term;
    this.fetchArticles();
  }
}
