import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPreciosKlynticProComponent } from './planes-precios-klyntic-pro.component';

describe('PlanesPreciosKlynticProComponent', () => {
  let component: PlanesPreciosKlynticProComponent;
  let fixture: ComponentFixture<PlanesPreciosKlynticProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesPreciosKlynticProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesPreciosKlynticProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
