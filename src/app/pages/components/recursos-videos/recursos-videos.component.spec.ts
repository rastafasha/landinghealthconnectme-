import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosVideosComponent } from './recursos-videos.component';

describe('RecursosVideosComponent', () => {
  let component: RecursosVideosComponent;
  let fixture: ComponentFixture<RecursosVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
