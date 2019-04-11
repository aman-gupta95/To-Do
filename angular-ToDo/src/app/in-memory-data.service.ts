import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const TodoBlocks = [
      {
        id: 1,
        title: 'Sports',
        content: ['Swimming', 'Jogging', 'Basketball', 'Badminton'],
        author: 'Viko',
        createdDate: '10/23/2018'
      },
      {
        id: 2,
        title: 'Grocery',
        content: ['Eggs', 'Vegetable' , 'milk' , 'potato'],
        author: 'Viko',
        createdDate: '10/23/2018'
    }
    ];
    return { TodoBlocks };
  }
}
