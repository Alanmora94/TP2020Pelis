import { TestBed } from '@angular/core/testing';

import { OrderListaService } from './order-lista.service';

describe('OrderListaService', () => {
  let service: OrderListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
