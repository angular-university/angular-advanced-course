import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {MASK_DIGIT_VALIDATORS} from "./digit_validators";
import {
  findFirstNonSpecialCharPosition, findLastNonSpecialCharPosition, moveCursorToEnd, never, overWriteCharAtPosition,
  setCursorPosition,
  SPECIAL_CHARACTERS
} from "./mask.utils";
import {BACKSPACE, DELETE, LEFT_ARROW, RIGHT_ARROW, TAB} from "./key_codes";
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

    switch(keyCode) {

      case LEFT_ARROW: this.handleLeftArrow(cursorPos);
                        return;

      case RIGHT_ARROW: this.handleRightArrow(cursorPos);
                        return;

      case BACKSPACE: this.handleBackSpace(cursorPos);
        return;

      case DELETE: this.handleDelete(cursorPos);
        return;
    }

    if (key.length > 1) {
      return;
    }

    const maskDigit = this.helperMask.charAt(cursorPos),
      digitValidator = MASK_DIGIT_VALIDATORS[maskDigit] || never;

    if (digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }

  }

  handleRightArrow(position) {

    const value = this.input.value;

    const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

    if (nextNonSpecialCharOffset >= 0) {
      setCursorPosition(this.input, position + 1 + nextNonSpecialCharOffset);
    }
    else {
      moveCursorToEnd(this.input);
    }

  }

  handleLeftArrow(position) {

    const value = this.input.value;

    const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

    setCursorPosition(this.input, previousNonSpecialCharPosition);
  }


  handleBackSpace(position) {

    const value = this.input.value;

    const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

    overWriteCharAtPosition(this.input, previousNonSpecialCharPosition, '_');

    setCursorPosition(this.input, previousNonSpecialCharPosition);

  }

  handleDelete(position) {

    overWriteCharAtPosition(this.input, position, '_');

  }


  initPlaceholder(mask: string) {

    const chars = mask.split('');

    const value = chars.reduce((result, char) => {

      if (char == ' ') {
        return result += '  ';
      }

      return result += includes(SPECIAL_CHARACTERS, char) ? char : '_';

    }, '');

    return value;
  }


}






