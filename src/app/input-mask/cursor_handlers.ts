
import {setInputCursorPosition} from "./set_input_cursor_position";
import * as findLastIndex from 'lodash.findlastindex';
import * as includes from 'lodash.includes';
import {SPECIAL_CHARACTERS} from "./mask_placeholder";
import {LEFT_ARROW, RIGHT_ARROW} from "./key_codes";
import {findFirstNonSpecialCharPosition} from "./utils";

export type KeyAction = (input: HTMLInputElement, position: number) => void;



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

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

