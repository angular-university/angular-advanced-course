import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

import * as includes from 'lodash.includes';
import {
     LEFT_ARROW, overWriteCharAtPosition, RIGHT_ARROW, SPECIAL_CHARACTERS,
    TAB
} from "./mask.utils";

import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';
import {maskDigitValidators} from "./digit_validators";



@Directive({
    selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

    @Input('au-mask')
    mask = '';

    input: HTMLInputElement;

    constructor(el: ElementRef) {

        this.input = el.nativeElement;

    }

    ngOnInit() {

        this.input.value = this.buildPlaceHolder();

    }

    @HostListener("keydown", ['$event', '$event.keyCode'])
    onKeyDown($event: KeyboardEvent, keyCode) {


        if (keyCode !== TAB) {
            $event.preventDefault();
        }

        const key = String.fromCharCode(keyCode),
            cursorPos = this.input.selectionStart;

        switch (keyCode) {

            case LEFT_ARROW:
                this.handleLeftArrow(cursorPos);


                return;

            case RIGHT_ARROW:

                this.handleRightArrow(cursorPos);

                return;

        }

        overWriteCharAtPosition(this.input, cursorPos, key);
        this.handleRightArrow(cursorPos);


    }

    handleLeftArrow(cursorPos) {
        const valueBeforeCursor = this.input.value.slice(0, cursorPos);

        const previousPos = findLastIndex(valueBeforeCursor,
            char => ! includes(SPECIAL_CHARACTERS, char) );

        if (previousPos >= 0) {
            this.input.setSelectionRange(previousPos, previousPos);
        }
    }

    handleRightArrow(cursorPos) {
        const valueAfterCursor = this.input.value.slice(cursorPos + 1);

        const nextPos =
            findIndex(valueAfterCursor, char => !includes(SPECIAL_CHARACTERS, char) );

        if (nextPos >= 0) {

            const newCursorPos = cursorPos + nextPos + 1;

            this.input.setSelectionRange(newCursorPos, newCursorPos);
        }
    }


    buildPlaceHolder(): string {

        const chars = this.mask.split('');

        return chars.reduce((result, char) => {

            return result +=
                includes(SPECIAL_CHARACTERS, char) ? char : '_'

        }, '');


    }

}













