import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../../models/article.model';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../../../pipes/default-image.pipe';

@Component({
  selector: 'app-article-item',
  styles: [
    `
      .on-sale {
        color: red;
        font-weight: bold;
      }

      .article-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
      }

      .article-info {
        flex: 1;
        margin-right: 20px;
      }

      .controls {
        display: flex;
        align-items: center;
      }

      button {
        margin: 0 5px;
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
      }
    `,
  ],
  imports: [CommonModule, DefaultImagePipe],
  standalone: true, 
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<{ article: Article; quantity: number }>();

  changeQuantity(amount: number) {
    const newQuantity = this.article.quantityInCart + amount;
    if (newQuantity >= 0) {
      this.quantityChange.emit({ article: this.article, quantity: newQuantity });
    }
  }

  increment() {
    this.changeQuantity(1);
  }

  decrement() {
    this.changeQuantity(-1);
  }
}
