import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosListaComponent } from './jogos-lista.component';

describe('JogosListaComponent', () => {
  let component: JogosListaComponent;
  let fixture: ComponentFixture<JogosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
