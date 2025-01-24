import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  template: `
    <div>
      <h1>Article Details</h1>
      <p>Article ID: {{ articleId }}</p>
    </div>
  `,
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  articleId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id'); 
  }
}
