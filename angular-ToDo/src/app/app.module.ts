import { TodoBlockService } from './services/todo-block.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoBlockComponent } from './todo-block/todo-block.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoListAreaComponent } from './todo-list-area/todo-list-area.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoBlockComponent,
    TodoListComponent,
    NavbarComponent,
    TodoListAreaComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [TodoBlockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
