import { TestBed } from '@angular/core/testing';

import { ButtonldService } from './buttonld.service';

describe('ButtonldService', () => {
  let service: ButtonldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
