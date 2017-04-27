import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ACTIONS_PER_KEY_CODE, handleRightArrow} from "./key_handlers";
import {MASK_DIGIT_VALIDATORS} from "./digit_validators";
import {
  findFirstNonSpecialCharPosition, never, overWriteCharAtPosition, setCursorPosition,
  SPECIAL_CHARACTERS
} from "./mask.utils";
import {TAB} from "./key_codes";
import * as includes from 'lodash.includes';



@Directive({
  selector: 'input[au-mask]'
})
export class InputMaskDirective implements OnChanges {

  @Input('au-mask')
  mask = '';

  helperMask: string;

  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mask']) {
      this.input.value = this.initPlaceholder(this.mask);
      this.helperMask = this.mask.replace(/\s/g, '  ');
    }
  }

  initPlaceholder(mask:string) {

    const chars = mask.split('');

    const value = chars.reduce((result, char) => {

      if (char == ' ') {
        return result += '  ';
      }

      return result += includes(SPECIAL_CHARACTERS, char) ? char : '_';

    }, '');

    return value;
  }

  @HostListener("keydown", ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {

    // allow Ctrl + C, prevent Ctrl + V
    if (($event.ctrlKey || $event.metaKey) && keyCode != 86) {
      return;
    }

    // block all keyboard behaviour, all changes are now made via input.value
    if (keyCode !== TAB) {
      $event.preventDefault();
    }

    // clear selection when typing starts - cannot be done on focus due to cross-browser compatibility
    if (this.input.selectionEnd > this.input.selectionStart) {
      setCursorPosition(this.input, findFirstNonSpecialCharPosition(this.input.value));
    }

    const key = String.fromCharCode(keyCode);

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
      overWriteCharAtPosition(this.input, cursorPos, key);
      handleRightArrow(this.input, cursorPos);
    }

  }


}






