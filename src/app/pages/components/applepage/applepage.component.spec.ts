import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplepageComponent } from './applepage.component';

describe('ApplepageComponent', () => {
  let component: ApplepageComponent;
  let fixture: ComponentFixture<ApplepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
