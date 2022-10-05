import { ITodo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todos: ITodo[] = [];

  getTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(
        tap((todos) => {
          this.todos = todos;
          localStorage.setItem('todos', JSON.stringify(todos));
        })
      );
  }

  getLocal() {
    let item = localStorage.getItem('todos');
    if (item) {
      this.todos = JSON.parse(item);
    }
  }

  changeCompleted(id: number) {
    let item = this.todos.findIndex((el) => el.id === id);
    this.todos[item].completed = !this.todos[item].completed;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  removeTodo(id: number) {
    let filtered = this.todos.filter((el) => el.id !== id);
    this.todos = filtered;
    localStorage.setItem('todos', JSON.stringify(filtered));
  }
}
