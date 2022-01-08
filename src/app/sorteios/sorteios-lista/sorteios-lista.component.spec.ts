import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosListaComponent } from './sorteios-lista.component';

describe('SorteiosListaComponent', () => {
  let component: SorteiosListaComponent;
  let fixture: ComponentFixture<SorteiosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteiosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
