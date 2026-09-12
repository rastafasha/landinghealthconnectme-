import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrobeneficiosComponent } from './cuadrobeneficios.component';

describe('CuadrobeneficiosComponent', () => {
  let component: CuadrobeneficiosComponent;
  let fixture: ComponentFixture<CuadrobeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrobeneficiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadrobeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
