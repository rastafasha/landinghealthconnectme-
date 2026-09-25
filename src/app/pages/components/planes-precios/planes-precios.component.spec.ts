import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPreciosComponent } from './planes-precios.component';

describe('PlanesPreciosComponent', () => {
  let component: PlanesPreciosComponent;
  let fixture: ComponentFixture<PlanesPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesPreciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
