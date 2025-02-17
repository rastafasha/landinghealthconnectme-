import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccedeComponent } from './accede.component';

describe('AccedeComponent', () => {
    let component: AccedeComponent;
    let fixture: ComponentFixture<AccedeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AccedeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccedeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});