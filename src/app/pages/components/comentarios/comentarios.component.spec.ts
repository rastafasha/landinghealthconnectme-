import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosComponent } from './comentarios.component';

describe('ComentariosComponent', () => {
    let component: ComentariosComponent;
    let fixture: ComponentFixture<ComentariosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ComentariosComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComentariosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});