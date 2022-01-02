import { TestBed } from '@angular/core/testing';

import { JogoResolver } from './jogo.resolver';

describe('JogoResolver', () => {
  let resolver: JogoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JogoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
