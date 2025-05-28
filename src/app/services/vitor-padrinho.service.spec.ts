import { TestBed } from '@angular/core/testing';

import { VitorPadrinhoService } from './vitor-padrinho.service';

describe('VitorPadrinhoService', () => {
  let service: VitorPadrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VitorPadrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
