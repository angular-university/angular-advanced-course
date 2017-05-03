import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuMdInputComponent } from './au-md-input.component';
import {InputRefDirective} from "../common/input-ref.directive";

describe('AuMdInputComponent', () => {
  let component: AuMdInputComponent;
  let fixture: ComponentFixture<AuMdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuMdInputComponent, InputRefDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuMdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
