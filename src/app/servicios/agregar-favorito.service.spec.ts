import { TestBed } from '@angular/core/testing';

import { AgregarFavoritoService } from './agregar-favorito.service';

describe('AgregarFavoritoService', () => {
  let service: AgregarFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
