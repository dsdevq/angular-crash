import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    if (localStorage.getItem('todos')) {
      return this.todoService.getLocal();
    }
    this.todoService.getTodos().subscribe();
  }
}
