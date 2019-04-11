import { formatDate } from '@angular/common';

export class TodoBlock {
  id: number;
  title: string;
  content: Array<string>;
  author: string;
  createdDate: string;
  constructor(title: string, author: string, content: Array<string>) {
    this.title = title;
    this.content = content;
    this.author = author;
    const createdDate = new Date();
    this.createdDate = formatDate(createdDate, 'dd/mm/yyyy', 'en');
  }
}
