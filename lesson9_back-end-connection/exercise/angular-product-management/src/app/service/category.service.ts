import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly URL = 'http://localhost:3000/category';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(this.URL);
  }
}
