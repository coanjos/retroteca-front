import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosListaItemComponent } from './jogos-lista-item.component';

describe('JogosListaItemComponent', () => {
  let component: JogosListaItemComponent;
  let fixture: ComponentFixture<JogosListaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosListaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
