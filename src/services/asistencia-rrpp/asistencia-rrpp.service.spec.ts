import { TestBed } from '@angular/core/testing';

import { AsistenciaRrppService } from './asistencia-rrpp.service';

describe('AsistenciaRrppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsistenciaRrppService = TestBed.get(AsistenciaRrppService);
    expect(service).toBeTruthy();
  });
});
