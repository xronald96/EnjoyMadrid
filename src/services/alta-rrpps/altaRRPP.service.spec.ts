import { TestBed } from '@angular/core/testing';

import { AltaRRPPService } from './altaRRPP.service';

describe('GeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AltaRRPPService = TestBed.get(AltaRRPPService);
    expect(service).toBeTruthy();
  });
});
