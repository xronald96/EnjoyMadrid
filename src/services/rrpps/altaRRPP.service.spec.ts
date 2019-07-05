import { TestBed } from '@angular/core/testing';

import { RrppsService } from './altaRRPP.service';

describe('GeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RrppsService = TestBed.get(RrppsService);
    expect(service).toBeTruthy();
  });
});
