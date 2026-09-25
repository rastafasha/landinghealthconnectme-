import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPreciosEuropaComponent } from './planes-precios-europa.component';

describe('PlanesPreciosEuropaComponent', () => {
  let component: PlanesPreciosEuropaComponent;
  let fixture: ComponentFixture<PlanesPreciosEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesPreciosEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesPreciosEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
