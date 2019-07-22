import { TestBed } from '@angular/core/testing';

import { DiscotecasService } from './discotecas.service';

describe('DiscotecasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscotecasService = TestBed.get(DiscotecasService);
    expect(service).toBeTruthy();
  });
});
