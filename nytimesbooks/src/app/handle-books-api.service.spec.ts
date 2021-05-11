import { TestBed } from '@angular/core/testing';

import { HandleBooksApiService } from './handle-books-api.service';

describe('HandleBooksApiService', () => {
  let service: HandleBooksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleBooksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
