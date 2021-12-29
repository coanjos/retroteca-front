import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosDetalheComponent } from './jogos-detalhe.component';

describe('JogosDetalheComponent', () => {
  let component: JogosDetalheComponent;
  let fixture: ComponentFixture<JogosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
