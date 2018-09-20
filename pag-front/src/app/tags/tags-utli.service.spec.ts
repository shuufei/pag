import { TestBed, inject } from '@angular/core/testing';

import { TagsUtliService } from './tags-utli.service';

describe('TagsUtliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsUtliService]
    });
  });

  it('should be created', inject([TagsUtliService], (service: TagsUtliService) => {
    expect(service).toBeTruthy();
  }));
});
