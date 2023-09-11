import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  private basePath = 'api/newspaper/category';

  constructor(private httpClient: HttpClient) {}

  getCategoryList(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}` + `${this.basePath}`
    );
  }

}
