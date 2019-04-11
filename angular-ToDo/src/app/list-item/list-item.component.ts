import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
@Input() item: string;
@Output() deleteListItem = new EventEmitter<string>();
  close: string;
  item_name: string;
  deleteItem: string;
  constructor() { }


  ngOnInit() {
    this.item_name = this.item;
    this.close = 'x';
  }

  removeItem() {
    this.deleteItem = this.item;
    this.deleteListItem.emit(this.deleteItem);
  }

}
