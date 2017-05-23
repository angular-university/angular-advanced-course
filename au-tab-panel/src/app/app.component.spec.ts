import { TestBed, async } from '@angular/core/testing';
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By}              from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TabPanelComponent} from "./tab-panel/tab-panel.component";
import {TabComponent} from "./tab/tab.component";


describe('AppComponent', () => {

  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    emailField: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TabPanelComponent, TabComponent
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


  it('should include the correct email icon inside the email input', async(() => {

    const tabs = emailField.queryAll(By.css('au-tab-pane .tab'));

    //TODO expect(tabs).toBeTruthy();
    //TODO expect(tabs.length).toBe(1);
  }));




});
