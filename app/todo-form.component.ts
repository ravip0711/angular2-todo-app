import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { Todo }      from './todo';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/todo-form.component.html'
})
export class TodoFormComponent {
  model = new Todo(5, 'clean dishes')

  submitted = false;

  onSubmit() { this.submitted = true; }
}
