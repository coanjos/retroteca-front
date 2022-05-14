import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosListaItemComponent } from './comentarios-lista-item.component';

describe('ComentariosListaItemComponent', () => {
  let component: ComentariosListaItemComponent;
  let fixture: ComponentFixture<ComentariosListaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosListaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
