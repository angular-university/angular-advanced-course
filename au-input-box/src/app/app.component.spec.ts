import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {InputBoxConfigDirective} from "./lib/config/input-box-config.directive";
import {InputRefDirective} from "./lib/common/input-ref.directive";
import {AuMdInputComponent} from "./lib/au-md-input/au-md-input.component";
import {FontAwesomeInputComponent} from "./lib/au-fa-input/au-fa-input.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputBoxConfigDirective, FontAwesomeInputComponent, AuMdInputComponent, InputRefDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
