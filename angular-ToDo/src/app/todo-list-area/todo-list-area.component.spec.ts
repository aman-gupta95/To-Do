import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAreaComponent } from './todo-list-area.component';

describe('TodoListAreaComponent', () => {
  let component: TodoListAreaComponent;
  let fixture: ComponentFixture<TodoListAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
