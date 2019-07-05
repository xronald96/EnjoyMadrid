import { TestBed } from '@angular/core/testing';

import { AltaUsuariosService } from './alta-usuarios.service';

describe('AltaUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AltaUsuariosService = TestBed.get(AltaUsuariosService);
    expect(service).toBeTruthy();
  });
});
