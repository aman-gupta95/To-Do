import { TodoBlock } from './../models/todoBlock';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoBlockService {
todoBlocks: Array<TodoBlock>;

idSeq: number;
private todoUrl = 'api/TodoBlocks';
constructor(private http: HttpClient) {
  this.todoBlocks = [];
  this.idSeq = 3;
}

getTodoBlocks (): Observable<TodoBlock[]> {
  return this.http.get<TodoBlock[]>(this.todoUrl)
    .pipe(
      tap(_ => console.log('fetched todoBlocks')),
      catchError(this.handleError('getTodoBlocks', []))
    );
}
createTodoBlock(todoBlock: TodoBlock = null, author: string, title: string, content: Array<string>): TodoBlock {
    let idSeq = this.idSeq, newTodoBlock: TodoBlock;
    idSeq += 1;
    newTodoBlock = todoBlock ? todoBlock : new TodoBlock(title , author , content);
    newTodoBlock.id = idSeq;
    this.idSeq = idSeq;
    return newTodoBlock;
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}
