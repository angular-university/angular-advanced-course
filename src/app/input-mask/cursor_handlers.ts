

import * as findLastIndex from 'lodash.findlastindex';
import {setInputCursorPosition} from "./set_input_cursor_position";



export type KeyAction = (input: HTMLInputElement, position: number) => void;



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpaceOffset = value.slice(position + 1).search(/[^\s]{1}/);

  setInputCursorPosition(input, position + 1 + nextNonSpaceOffset);

};



export function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpacePosition = findLastIndex(value.slice(0, position), char => char !== ' ' );

  setInputCursorPosition(input, previousNonSpacePosition);

}



const LEFT_ARROW =	37, RIGHT_ARROW = 39;

export const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;

