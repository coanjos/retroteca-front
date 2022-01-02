import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosEdicaoComponent } from './jogos-edicao.component';

describe('JogosEdicaoComponent', () => {
  let component: JogosEdicaoComponent;
  let fixture: ComponentFixture<JogosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
