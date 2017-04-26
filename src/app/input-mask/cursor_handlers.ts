
import {setInputCursorPosition} from "./set_input_cursor_position";
import * as findLastIndex from 'lodash.findlastindex';
import {SPECIAL_CHARACTERS} from "./mask_placeholder";
import {BACKSPACE, LEFT_ARROW, RIGHT_ARROW} from "./key_codes";
import * as includes from 'lodash.includes';
import * as findIndex from 'lodash.findindex';
import {applyCharToInput} from "./apply_char_to_input";

export type KeyAction = (input: HTMLInputElement, position: number) => void;


export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

  setInputCursorPosition(input, position + 1 + nextNonSpecialCharOffset);

};



export function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  setInputCursorPosition(input, previousNonSpecialCharPosition);

}


export function handleBackSpace(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  applyCharToInput(input, previousNonSpecialCharPosition, '_');

  setInputCursorPosition(input, previousNonSpecialCharPosition);

}


export const findFirstNonSpecialCharPosition = (value:string) => findIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );

export const findLastNonSpecialCharPosition = (value:string) => findLastIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );


export const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;
ACTIONS_PER_KEY_CODE[BACKSPACE] = handleBackSpace;
