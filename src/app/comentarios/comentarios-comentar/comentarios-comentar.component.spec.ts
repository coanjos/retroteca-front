import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosComentarComponent } from './comentarios-comentar.component';

describe('ComentariosComentarComponent', () => {
  let component: ComentariosComentarComponent;
  let fixture: ComponentFixture<ComentariosComentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosComentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosComentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
