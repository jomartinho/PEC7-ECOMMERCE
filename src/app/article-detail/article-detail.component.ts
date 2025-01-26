import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article-service.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterModule],
  standalone: true, 
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | null = null; 
  articleId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private articleService: ArticleService
    ) {}

  
  ngOnInit() {
    console.log('ActivatedRoute is temporarily removed.');
  }
  /*
  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id');
    if (this.articleId) {
      this.articleService.getArticleById(this.articleId).subscribe((data: Article) => {
        this.article = data;
      });
    } else {
      console.error('Article ID is null!');
    }
  }*/
}
