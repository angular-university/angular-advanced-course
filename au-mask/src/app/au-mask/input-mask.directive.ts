import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from "@angular/core";
import {MASK_DIGIT_VALIDATORS} from "./digit_validators";
import {
    findFirstNonSpecialCharPosition, findLastNonSpecialCharPosition, isInputSelectionActive, moveCursorToEnd, never,
    overWriteCharAtPosition,
    setCursorPosition,
    SPECIAL_CHARACTERS
} from "./mask.utils";
import {BACKSPACE, DELETE, LEFT_ARROW, RIGHT_ARROW, TAB} from "./mask.utils";
import * as includes from 'lodash.includes';


@Directive({
    selector: 'input[au-mask]'
})
export class InputMaskDirective implements OnChanges {

    @Input('au-mask')
    mask = '';

    helperMask: string;

    input: HTMLInputElement;

    fullFieldSelected = false;

    constructor(el: ElementRef) {
        this.input = el.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['mask']) {
            this.resetInputValue();
            this.helperMask = this.mask.replace(/\s/g, '  ');
        }
    }

    @HostListener("select", ['$event'])
    onSelect($event: UIEvent) {
        this.fullFieldSelected = this.input.selectionStart == 0 && this.input.selectionEnd == this.input.value.length;
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
        if (isInputSelectionActive(this.input)) {
            this.goToFirstEditableDigit();
        }

        const key = String.fromCharCode(keyCode),
            value = this.input.value;

        const cursorPos = this.input.selectionStart;


        switch (keyCode) {

            case LEFT_ARROW:
                this.handleLeftArrow(value, cursorPos);
                return;

            case RIGHT_ARROW:
                this.handleRightArrow(value, cursorPos);
                return;

            case BACKSPACE:
                console.log('backspace');
                this.handleBackSpace(value, cursorPos);
                return;

            case DELETE:
                this.handleDelete(cursorPos);
                return;
        }

        if (key.length > 1) {
            return;
        }

        const maskDigit = this.helperMask.charAt(cursorPos),
            digitValidator = MASK_DIGIT_VALIDATORS[maskDigit] || never;

        if (digitValidator(key)) {
            overWriteCharAtPosition(this.input, cursorPos, key);
            this.handleRightArrow(value, cursorPos);
        }

    }

    resetInputValue() {
        this.input.value = this.initPlaceholder(this.mask);
    }

    goToFirstEditableDigit() {
        setCursorPosition(this.input, findFirstNonSpecialCharPosition(this.input.value));
    }

    handleRightArrow(value, position) {

        const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

        if (nextNonSpecialCharOffset >= 0) {
            setCursorPosition(this.input, position + 1 + nextNonSpecialCharOffset);
        }
        else {
            moveCursorToEnd(this.input);
        }

    }

    handleLeftArrow(value, position) {

        const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

        setCursorPosition(this.input, previousNonSpecialCharPosition);
    }


    handleBackSpace(value, position) {

        if (position > 0) {

            const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

            overWriteCharAtPosition(this.input, previousNonSpecialCharPosition, '_');

            setCursorPosition(this.input, previousNonSpecialCharPosition);

        }
        else if (this.fullFieldSelected) {

            this.input.value = this.initPlaceholder(this.mask);

            this.resetInputValue();
            this.goToFirstEditableDigit();

        }

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





