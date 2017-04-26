import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ACTIONS_PER_KEY_CODE, handleRightArrow} from "./key_handlers";
import {initHelperMask, initPlaceholder} from "./mask_placeholder";
import {applyCharToInput} from "./apply_char_to_input";
import {MASK_DIGIT_VALIDATORS} from "./digit_validators";
import {findFirstNonSpecialCharPosition, never} from "./utils";
import {TAB} from "./key_codes";
import {setInputCursorPosition} from "./set_input_cursor_position";




@Directive({
  selector: 'input[au-mask]'
})
export class InputMask implements OnChanges {

  @Input('au-mask')
  mask = '';

  helperMask: string;

  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mask']) {
      this.input.value = initPlaceholder(this.mask);
      this.helperMask = initHelperMask(this.mask);
    }
  }


  @HostListener('focus')
  onFocus() {
    setInputCursorPosition(this.input, findFirstNonSpecialCharPosition(this.input.value));
  }


  @HostListener("keydown", ['$event', '$event.key', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, key, keyCode) {

    if (keyCode !== TAB) {
      $event.preventDefault();
    }

    const cursorPos = this.input.selectionStart;

    if (ACTIONS_PER_KEY_CODE[keyCode]) {
      ACTIONS_PER_KEY_CODE[keyCode](this.input, cursorPos);
      return;
    }

    if (key.length > 1) {
      return;
    }

    const maskDigit = this.helperMask.charAt(cursorPos),
          digitValidator = MASK_DIGIT_VALIDATORS[maskDigit] || never;

    if (digitValidator(key)) {
      applyCharToInput(this.input, cursorPos, key);
      handleRightArrow(this.input, cursorPos);
    }

  }


}






