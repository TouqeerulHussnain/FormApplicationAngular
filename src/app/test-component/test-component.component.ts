import { Component } from '@angular/core';
import { TodoModel } from '../Todo';
import { CommonModule } from "@angular/common"
import { TodoItemComponent } from "../MyComponents/todo-item/todo-item.component";

@Component({
  selector: 'app-test-component',
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
  imports: [CommonModule, TodoItemComponent]
})
export class TestComponentComponent {
  deleteTodo($event: TodoModel) {
    console.log($event.serailNumber);
  }

  todoList: TodoModel[] = [

  ]
  title = "TestComponent Title is a variable";
  /**
   *
   */
  constructor() {
    this.todoList = [
      { serailNumber: "1" },
      { serailNumber: "2" },
      { serailNumber: "3" },

    ]

  }
}
