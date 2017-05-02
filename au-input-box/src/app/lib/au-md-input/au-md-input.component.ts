import { Component, AfterContentInit, HostBinding, ContentChild, Input } from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";


@Component({
  selector: 'au-md-input',
  templateUrl: './au-md-input.component.html',
  styleUrls: ['../common/au-input-box.css',  './au-md-input.component.css']
})
export class AuMdInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error("the au-md-input needs an input inside its content");
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input.focus;
  }


}
