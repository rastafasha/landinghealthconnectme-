import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlynticExpvschatbotComponent } from './klyntic-expvschatbot.component';

describe('KlynticExpvschatbotComponent', () => {
  let component: KlynticExpvschatbotComponent;
  let fixture: ComponentFixture<KlynticExpvschatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlynticExpvschatbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlynticExpvschatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
