import { TodoService } from './../../services/todo.service';
import { ITodo } from './../../models/todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: ITodo;

  constructor(private todoService: TodoService) {}

  toggleCompleted(id: number) {
    this.todoService.changeCompleted(id);
  }
  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
