import { Component } from '@angular/core';
import { TodoBlock } from './models/todoBlock';
import { TodoBlockService } from './services/todo-block.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toDoParent: Array<TodoBlock>;

  constructor(toDoService: TodoBlockService) {
    toDoService.getTodoBlocks().subscribe(todos => this.toDoParent = todos);
  }

  addTodoBlock(todoBlock: TodoBlock) {
    this.toDoParent.push(todoBlock);
  }
}
