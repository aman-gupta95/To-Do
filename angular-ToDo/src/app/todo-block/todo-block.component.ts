import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoBlock } from '../models/todoBlock';

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.scss']
})
export class TodoBlockComponent implements OnInit {
  @Input() todoBlock: TodoBlock;
  @Output() deletePerformed = new EventEmitter <TodoBlock>();
  author: string;
  date: string;
  content: Array<string>;
  ListTitle: string;
  deleteBlock: TodoBlock;
  value: string;
  constructor() {
   }
  deleteListener() {
    this.deleteBlock = this.todoBlock;
    this.deletePerformed.emit(this.deleteBlock);
  }
  addContent() {
    this.todoBlock.content.push(this.value);
    this.value = '';
  }
  editListener() {
    const messageStr = 'Please enter the To-Do list Title';
    const defaultStr = '';
    const content = window.prompt(messageStr, defaultStr);
    if (content !== null && content !== ' ') {
      this.ListTitle = content;
    }
  }
  ngOnInit() {
    this.author = this.todoBlock.author;
    this.date  = this.todoBlock.createdDate;
    this.content = this.todoBlock.content;
    this.ListTitle = this.todoBlock.title;
  }

}
