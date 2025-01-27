import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../services/article-service.service';
import { Article } from '../../../models/article.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true, 
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/)]],
      isOnSale: [false],
    });
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      const newArticle: Article = {
        id: 0, 
        quantityInCart: 0,
        ...this.articleForm.value,
      };

      this.articleService.create(newArticle).subscribe((response: Article) => {
        console.log('Artículo creado en el servidor:', response);
        this.articleForm.reset(); 
      });
    }
  }
}
