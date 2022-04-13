import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  URL = ' http://localhost:3000/todo/';

  constructor(private http: HttpClient) { }

  getInfo(): any{
    return this.http.get(this.URL).pipe(map(res => res));
  }
  deleteCategory(id: number) {
    console.log(id);
    return this.http.delete<Todo>(this.URL  + id);
  }
}
