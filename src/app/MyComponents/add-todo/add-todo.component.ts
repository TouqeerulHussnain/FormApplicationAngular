import { Component, Output, EventEmitter, } from '@angular/core';
import { TodoModel } from '../../Todo';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  OnSubmitMyForm() {
    console.log("clicked");
    let todo = new TodoModel();
    todo.serailNumber = this.serailNumber;
    console.log(todo.serailNumber);
    this.addTodoEmitter.emit(todo);
  }
  serailNumber: string = "";


  addTodo(name: string) {
    console.log("clicked");
    let todo = new TodoModel();
    todo.serailNumber = name;
    this.addTodoEmitter.emit(todo);
  }
  @Output() addTodoEmitter: EventEmitter<TodoModel> = new EventEmitter;
}
