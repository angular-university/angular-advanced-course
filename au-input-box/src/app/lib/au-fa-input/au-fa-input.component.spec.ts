import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeInputComponent } from './au-fa-input.component';
import {InputRefDirective} from "../common/input-ref.directive";

describe('AuFaInputComponent', () => {
  let component: FontAwesomeInputComponent;
  let fixture: ComponentFixture<FontAwesomeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeInputComponent, InputRefDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
