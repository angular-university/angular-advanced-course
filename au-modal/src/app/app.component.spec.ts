import {TestBed, async} from '@angular/core/testing';
import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By}              from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuModalOpenOnClickDirective} from "./au-modal/au-modal-open-on-click.directive";
import {AuModalComponent} from "./au-modal/au-modal.component";
import {AuInputModule} from "au-input";
import {AuTabPanelModule} from "au-tab-panel";
import {AuModalModule} from "./au-modal/au-modal.module";



describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        modal: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                AuInputModule,
                AuTabPanelModule,
                AuModalModule.forRoot()
            ]

        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        modal = el.query(By.css('#testModal'));

        fixture.detectChanges();

    });


    it('should create the test application', async(() => {

        expect(component).toBeTruthy();

    }));


    it('should not add the modal to the page, if the modal is closed', async(() => {

        expect(modal).toBeFalsy();

    }));


    it('should open the modal when the test button is clicked', async(() => {

        fixture.nativeElement.querySelector("#testButton").click();

        fixture.detectChanges();

        const openedModal = fixture.nativeElement.querySelector("#testModal");


        expect(openedModal).toBeTruthy();

    }));


});
