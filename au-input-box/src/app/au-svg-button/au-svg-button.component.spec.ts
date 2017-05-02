import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuSvgButtonComponent } from './au-svg-button.component';

describe('AuSvgButtonComponent', () => {
  let component: AuSvgButtonComponent;
  let fixture: ComponentFixture<AuSvgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuSvgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuSvgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
