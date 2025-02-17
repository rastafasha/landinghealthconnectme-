import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreComponent } from './descubre.component';

describe('DescubreComponent', () => {
    let component: DescubreComponent;
    let fixture: ComponentFixture<DescubreComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DescubreComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DescubreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});