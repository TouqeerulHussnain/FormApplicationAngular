import { Component } from '@angular/core';
import { TodoModel } from '../Todo';
import { CommonModule } from "@angular/common"
import { TodoItemComponent } from "../MyComponents/todo-item/todo-item.component";
import { AddTodoComponent } from '../MyComponents/add-todo/add-todo.component';

@Component({
  selector: 'app-test-component',
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TestComponentComponent {
  addTodoToList(todo: TodoModel) {
    console.log("emitter called")
    this.todoList.push(todo);
  }
  deleteTodo(todo: TodoModel) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    console.log(todo.serailNumber);
  }

  todoList: TodoModel[] = [

  ]
  title = "TestComponent Title is a variable";

  constructor() {
    this.todoList = [
      { serailNumber: "1" },
      { serailNumber: "2" },
      { serailNumber: "3" },

    ]

  }
}
