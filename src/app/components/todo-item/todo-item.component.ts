import { TodoService } from './../../services/todo.service';
import { ITodo } from './../../models/todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor(private todoService: TodoService) {}

  toggleCompleted(id: number) {
    this.todoService.changeCompleted(id);
    console.log(id);
    console.log(this.todo.completed);
  }
  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

  ngOnInit(): void {}
}
