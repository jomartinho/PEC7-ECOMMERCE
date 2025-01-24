import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class ArticleNewTemplateComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/\S*)?$/)]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Datos del artículo:', this.articleForm.value);
    } else {
      console.log('El formulario no es válido');
    }
  }
}
