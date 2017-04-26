
import {setInputCursorPosition} from "./set_input_cursor_position";
import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';
import * as includes from 'lodash.includes';
import {SPECIAL_CHARACTERS} from "./mask_placeholder";
import {LEFT_ARROW, RIGHT_ARROW} from "./key_codes";

export type KeyAction = (input: HTMLInputElement, position: number) => void;



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpecialCharOffset = findIndex(value.slice(position + 1), char => ! includes(SPECIAL_CHARACTERS, char) );

  setInputCursorPosition(input, position + 1 + nextNonSpecialCharOffset);

};



export function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastIndex(value.slice(0, position), char => ! includes(SPECIAL_CHARACTERS, char) );

  setInputCursorPosition(input, previousNonSpecialCharPosition);

}




export const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;

