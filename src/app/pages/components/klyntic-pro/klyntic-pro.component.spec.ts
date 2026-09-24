import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticProComponent } from './klyntic-pro.component';

describe('KlynticProComponent', () => {
  let component: KlynticProComponent;
  let fixture: ComponentFixture<KlynticProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
