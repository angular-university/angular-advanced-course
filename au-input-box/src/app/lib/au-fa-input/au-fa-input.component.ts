import {
  Component,
  Input,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  HostBinding
} from '@angular/core';
import {InputRefDirective} from "./input-ref.directive";


@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class FontAwesomeInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error("the au-fa-input needs an input inside its content");
    }
  }

  get classes() {

    const cssClasses = {
      'fa': true,
      'icon': true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }


  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input.focus;
  }


}
