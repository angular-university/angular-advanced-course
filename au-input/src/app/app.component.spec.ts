import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {InputRefDirective} from "./lib/common/input-ref.directive";
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,AuFaInputComponent , InputRefDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should render a font-awesome email button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fa.icon.fa-envelope')).toBeTruthy();
  }));


});
