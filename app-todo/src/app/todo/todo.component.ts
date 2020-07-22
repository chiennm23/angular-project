import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ITodo} from '../itodo';
let id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  userInput = new FormControl();
  todos: Array<ITodo> = [];
  // tslint:disable-next-line:typedef
  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }
  // tslint:disable-next-line:typedef
  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
