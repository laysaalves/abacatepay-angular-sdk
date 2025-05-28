import { TestBed } from '@angular/core/testing';

import { AbacatepayService } from './abacatepay.service';

describe('AbacatepayService', () => {
  let service: AbacatepayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbacatepayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
