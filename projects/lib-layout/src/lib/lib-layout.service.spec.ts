import { TestBed } from '@angular/core/testing';

import { LibLayoutService } from './lib-layout.service';

describe('LibLayoutService', () => {
  let service: LibLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
