import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./lib/common/input-ref.directive";
import {DebugElement} from '@angular/core';
import {By}              from '@angular/platform-browser';

describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailField: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, AuFaInputComponent, InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));

        fixture.detectChanges();

    });


    it('should create the test application', async(() => {
        expect(component).toBeTruthy();
    }));


    it('should create a font awesome email input', async(() => {
        expect(emailField).toBeTruthy();

    }));

    it('should include the correct email icon inside the email input', async(() => {
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should have projected the correct test input inside the email field', async(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));



});
