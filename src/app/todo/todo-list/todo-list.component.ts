import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoService = inject(TodoService)
  todos: any;

  async ngOnInit() {
    this.todos = await this.todoService.todos;
    console.log("tidi", this.todos)
  }

  // updateTodo(todo: Todo) {
  //   this.todoService.updateTodo(todo);
  // }

  // async newTodo(title: string) {
  //   await this.todoService.addTodo(title);
  //   this.todos = this.todoService.todos;
  // }
}
