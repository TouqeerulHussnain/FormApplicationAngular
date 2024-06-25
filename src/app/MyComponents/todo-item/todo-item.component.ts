import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  OnClickFunction(todo: TodoModel) {

    this.GoOutEmitter.emit(todo);
    console.log("OnClicked is clicked and declared in the same module")
  }
  @Input()
  todo: TodoModel = new TodoModel;

  @Output() GoOutEmitter: EventEmitter<TodoModel> = new EventEmitter();
}
