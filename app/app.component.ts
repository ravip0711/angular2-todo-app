import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoFormComponent } from './todo-form.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <p>My Todos:</p>
      <ul>
        <li *ngFor="let todo of todos">
          {{ todo.note }}
        </li>
      </ul>
      <todo-form></todo-form>
      `,
      directives: [TodoFormComponent]
})
export class AppComponent {
  title = 'Ravi\'s Todo App';
  todos = [
    new Todo(1, 'buy apples'),
    new Todo(2, 'get computer'),
    new Todo(3, 'turn in application')
  ];
}
