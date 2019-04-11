import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoBlockService } from '../services/todo-block.service';
import { TodoBlock } from '../models/todoBlock';
import { TodoListAreaComponent } from '../todo-list-area/todo-list-area.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() todoListArea: TodoListAreaComponent;
  title = 'To-Do List';
  listTitle;
  user;
  author;

  constructor() {
    const messageStr = 'Please input your name';
    const defaultStr = '';
    const content = window.prompt(messageStr, defaultStr);
    if (content !== null && content !== '') {
            this.user = 'Welcome, ' + content;
            this.author = content;
    }
  }

  addIconListener() {
    }
  ngOnInit() {
  }
}
