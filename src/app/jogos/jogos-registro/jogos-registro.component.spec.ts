import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosRegistroComponent } from './jogos-registro.component';

describe('JogosRegistroComponent', () => {
  let component: JogosRegistroComponent;
  let fixture: ComponentFixture<JogosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
