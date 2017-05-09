import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./lib/common/input-ref.directive";


describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, AuFaInputComponent, InputRefDirective
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);

        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));



});
