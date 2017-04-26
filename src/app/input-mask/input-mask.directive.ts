import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {applyMask} from "./apply_mask";
import {handleLeftArrow} from "./key-handlers/handle_left_arrow";
import {handleRightArrow} from "./key-handlers/handle_right_arrow";
import {KeyAction} from "./key-handlers/key_action";
import {handleNumeric} from "./key-handlers/handle_numeric";


const LEFT_ARROW =	37, UP_ARROW = 38, RIGHT_ARROW = 39, DOWN_ARROW = 40;

const KEY_ACTIONS: {[key:number]: KeyAction} = {};

KEY_ACTIONS[RIGHT_ARROW] = handleRightArrow;
KEY_ACTIONS[LEFT_ARROW] = handleLeftArrow;

for (let i = 48; i <= 57; i++) {
  KEY_ACTIONS[i] = handleNumeric;
}



@Directive({
  selector: 'input[au-mask]'
})
export class InputMask implements OnChanges {

  @Input('au-mask')
  mask = '';

  currentValue = '';

  input: HTMLInputElement;

  constructor( el:ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mask']) {
      this.currentValue = applyMask(this.mask);
    }

  }

  @HostBinding('value')
  get value() {
    return this.currentValue;
  }

  @HostListener("keydown", ['$event','$event.key', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, key, keyCode) {

    $event.preventDefault();

    const cursorPos = this.input.selectionStart;

    if (KEY_ACTIONS[keyCode]) {
      KEY_ACTIONS[keyCode](this.input, cursorPos, this.mask, key, keyCode);
    }

  }

}
