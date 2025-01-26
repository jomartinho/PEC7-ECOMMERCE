import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';
  private articlesSubject = new BehaviorSubject<Article[]>([]);
  articles$ = this.articlesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getArticles(query: string = ''): Observable<Article[]> {
    const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl;
    return this.http.get<Article[]>(url).pipe(
      tap((articles) => this.articlesSubject.next(articles))
    );
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { changeInQuantity }).pipe(
      tap(() => this.getArticles().subscribe())
    );
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article).pipe(
      tap(() => this.getArticles().subscribe())
    );
  }
}
