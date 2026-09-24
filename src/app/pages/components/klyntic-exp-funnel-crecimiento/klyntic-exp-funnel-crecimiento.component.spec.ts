import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticExpFunnelCrecimientoComponent } from './klyntic-exp-funnel-crecimiento.component';

describe('KlynticExpFunnelCrecimientoComponent', () => {
  let component: KlynticExpFunnelCrecimientoComponent;
  let fixture: ComponentFixture<KlynticExpFunnelCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticExpFunnelCrecimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticExpFunnelCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
