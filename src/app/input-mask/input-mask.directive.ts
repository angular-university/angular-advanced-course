import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {handleLeftArrow, handleRightArrow, KeyAction} from "./cursor_handlers";
import {findMaskDigitForPosition, initPlaceholderMask} from "./mask_placeholder";
import {applyCharToInput} from "./apply_char_to_input";



const LEFT_ARROW =	37, RIGHT_ARROW = 39;

const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;







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



type DigitValidator = (char:string) => boolean;

const numericValidator = char => /[0-9]{1}/.test(char);

const lowerCaseValidator = char => /[a-z]{1}/.test(char);

const upperCaseValidator = char => /[A-Z]{1}/.test(char);


const MASK_DIGIT_VALIDATORS: {[key:string]:DigitValidator} = {
  '9': numericValidator,
  'a': lowerCaseValidator,
  'A': upperCaseValidator
};


