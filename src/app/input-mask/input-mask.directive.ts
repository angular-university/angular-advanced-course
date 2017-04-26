import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ACTIONS_PER_KEY_CODE, handleRightArrow} from "./cursor_handlers";
import {findMaskDigitForPosition, initPlaceholderMask} from "./mask_placeholder";
import {applyCharToInput} from "./apply_char_to_input";
import {MASK_DIGIT_VALIDATORS} from "./digit_validators";


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

    if (ACTIONS_PER_KEY_CODE[keyCode]) {
      ACTIONS_PER_KEY_CODE[keyCode](this.input, cursorPos);
      return;
    }

    const maskDigit = findMaskDigitForPosition(this.input.value, cursorPos, this.mask);

    if (MASK_DIGIT_VALIDATORS[maskDigit](key)) {
      applyCharToInput(this.input, cursorPos, key);
      handleRightArrow(this.input, cursorPos);
    }
  }


}






