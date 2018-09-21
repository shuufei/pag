import { TestBed, inject } from '@angular/core/testing';

import { ItemsUtilService } from './items-util.service';

describe('ItemsUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsUtilService]
    });
  });

  it('should be created', inject([ItemsUtilService], (service: ItemsUtilService) => {
    expect(service).toBeTruthy();
  }));
});
