import { ITodo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todos: ITodo[] = [];

  getTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap((todos) => {
          this.todos = todos;
          console.log(todos);
        })
      );
  }
  changeCompleted(id: number) {
    let item = this.todos.findIndex((el) => el.id === id);
    this.todos[item].completed = !this.todos[item].completed;
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((el) => el.id !== id);
  }
}
