import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticEnterpriseComponent } from './klyntic-enterprise.component';

describe('KlynticEnterpriseComponent', () => {
  let component: KlynticEnterpriseComponent;
  let fixture: ComponentFixture<KlynticEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
