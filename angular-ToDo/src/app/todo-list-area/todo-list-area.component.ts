import { TodoBlock } from './../models/todoBlock';
import { Component, OnInit, Input } from '@angular/core';
import { TodoBlockService } from '../services/todo-block.service';
// import { TODOBLOCKS } from '../mock-toDo';

@Component({
  selector: 'app-todo-list-area',
  templateUrl: './todo-list-area.component.html',
  styleUrls: ['./todo-list-area.component.scss']
})
export class TodoListAreaComponent implements OnInit {
  @Input() todoBlocks: Array<TodoBlock>;
  @Input() author: string;
  title: string;
  todoService: TodoBlockService;
  constructor(todoService: TodoBlockService) {
    this.todoService = todoService;
   }

   createTodoBlock() {
    const messageStr = 'Please enter the To-Do list Title';
    const defaultStr = '';
    const content = window.prompt(messageStr, defaultStr);
    if (content !== null && content !== '') {
        this.title = content;
      }
    this.todoBlocks.push(this.todoService.createTodoBlock(null, this.author, this.title, []));
   }

   deleteBlock(block: TodoBlock) {
    const index = this.todoBlocks.indexOf(block);
    this.todoBlocks.splice(index, 1);
   }
  ngOnInit() {
  }

}
