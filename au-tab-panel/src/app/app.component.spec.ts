import {TestBed, async} from '@angular/core/testing';
import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By}              from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuTabPanelModule} from './au-tab-panel/au-tab-panel.module';




describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        tabPanel: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports:[AuTabPanelModule]
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        tabPanel = el.query(By.css('#tab-panel'));

        fixture.detectChanges();

    });


    it('should create the test application', async(() => {
        expect(component).toBeTruthy();
    }));


    it('should find only one tab inside the tab container', async(() => {

        const tabs = tabPanel.queryAll(By.css('.tab'));

        expect(tabs).toBeTruthy();
        expect(tabs.length).toBe(1);
    }));


    it('should find the Contact tab button marked as active', async(() => {

        const selectedButton = tabPanel.query(
            By.css('.tab-panel-buttons li.selected')).nativeElement;

        expect(selectedButton).toBeTruthy();
        expect(selectedButton.textContent).toContain("Contact");

    }));


    it('should display the Contacts tab', async(() => {

        const contactEmail = tabPanel.query(By.css('.contact-email'));

        expect(contactEmail).toBeTruthy();

    }));


    it('should switch to the Login Tab', async(() => {

        const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

        tabButtons[0].nativeElement.click();

        fixture.detectChanges();

        const loginEmail = tabPanel.query(By.css('.login-email'));
        expect(loginEmail).toBeTruthy();

        const selectedButton = tabPanel.query(
            By.css('.tab-panel-buttons li.selected')).nativeElement;

        expect(selectedButton).toBeTruthy();
        expect(selectedButton.textContent).toContain("Login");


    }));



});

















