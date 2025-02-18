import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaningComponent } from './spaning.component';

describe('SpaningComponent', () => {
    let component: SpaningComponent;
    let fixture: ComponentFixture<SpaningComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpaningComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpaningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});