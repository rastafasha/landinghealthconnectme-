import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticHeroComponent } from './klyntic-hero.component';

describe('KlynticHeroComponent', () => {
  let component: KlynticHeroComponent;
  let fixture: ComponentFixture<KlynticHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
