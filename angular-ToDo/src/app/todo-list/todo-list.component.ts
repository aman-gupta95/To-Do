import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() title: string;
  @Input() contents: Array<string>;
      constructor() {

      }
  ngOnInit() {
  }
  removeContent(item: string) {
    const index = this.contents.indexOf(item);
    this.contents.splice(index, 1);
  }

}
