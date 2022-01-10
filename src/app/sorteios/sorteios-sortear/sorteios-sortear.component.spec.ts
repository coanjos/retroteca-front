import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosSortearComponent } from './sorteios-sortear.component';

describe('SorteiosSortearComponent', () => {
  let component: SorteiosSortearComponent;
  let fixture: ComponentFixture<SorteiosSortearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteiosSortearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosSortearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
