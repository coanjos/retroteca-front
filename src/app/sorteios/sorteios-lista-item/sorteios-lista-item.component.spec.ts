import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosListaItemComponent } from './sorteios-lista-item.component';

describe('SorteiosListaItemComponent', () => {
  let component: SorteiosListaItemComponent;
  let fixture: ComponentFixture<SorteiosListaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteiosListaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
