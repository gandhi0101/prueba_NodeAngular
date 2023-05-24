import { TestBed } from '@angular/core/testing';

import { PresonasService } from './presonas.service';

describe('PresonasService', () => {
  let service: PresonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
