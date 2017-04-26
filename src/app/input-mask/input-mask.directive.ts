import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {handleLeftArrow} from "./key-handlers/handle_left_arrow";
import {handleRightArrow} from "./key-handlers/handle_right_arrow";
import {KeyAction} from "./key-handlers/key_action";
import {initPlaceholderMask} from "./init_placeholder_mask";
import {applyCharToInput} from "./key-handlers/apply_char_to_input";


const LEFT_ARROW =	37, RIGHT_ARROW = 39;

const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;


const ACTIONS_PER_CHAR: {[key:string]: KeyAction} = {};








@Directive({
  selector: 'input[au-mask]'
})
export class InputMask implements OnChanges {

  @Input('au-mask')
  mask = '';

  input: HTMLInputElement;

  constructor( el:ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mask']) {
      this.input.value = initPlaceholderMask(this.mask);
    }
  }


  @HostListener("keydown", ['$event','$event.key', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, key, keyCode) {

    $event.preventDefault();

    const cursorPos = this.input.selectionStart;

    if (isCursorKey(keyCode)) {
      ACTIONS_PER_KEY_CODE[keyCode](this.input, cursorPos, this.mask, key, keyCode);
      return;
    }



    applyCharToInput(this.input, cursorPos, key);
    handleRightArrow(this.input, cursorPos);

  }


}


const isCursorKey = (keyCode) => keyCode === 37 || keyCode === 39;
