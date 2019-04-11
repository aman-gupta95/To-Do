import { TestBed } from '@angular/core/testing';

import { TodoBlockService } from './todo-block.service';

describe('TodoBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoBlockService = TestBed.get(TodoBlockService);
    expect(service).toBeTruthy();
  });
});
