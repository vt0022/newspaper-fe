import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private basePath = 'api/newspaper/article';

  constructor(private httpClient: HttpClient) {}

  getArticleList(page: number, size: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    return this.httpClient.get<any>(
      `${environment.apiUrl}` + `${this.basePath}` + '/all',
      {
        params: params,
      }
    );
  }

  getTargetArticle(slug: string): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}` +
        `${this.basePath}` +
        '/' +
        encodeURIComponent(slug)
    );
  }

  getArticleByCategory(
    category: string,
    page: number,
    size: number
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    return this.httpClient.get<any>(
      `${environment.apiUrl}` +
        `${this.basePath}` +
        '/category/' +
        encodeURIComponent(category),
      { params: params }
    );
  }
}
