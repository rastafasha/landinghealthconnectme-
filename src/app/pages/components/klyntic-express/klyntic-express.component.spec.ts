import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticExpressComponent } from './klyntic-express.component';

describe('KlynticExpressComponent', () => {
  let component: KlynticExpressComponent;
  let fixture: ComponentFixture<KlynticExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticExpressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
