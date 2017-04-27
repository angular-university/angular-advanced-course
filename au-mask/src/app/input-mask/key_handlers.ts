
import {BACKSPACE, DELETE, LEFT_ARROW, RIGHT_ARROW} from "./key_codes";
import {
  findFirstNonSpecialCharPosition, findLastNonSpecialCharPosition, moveCursorToEnd, overWriteCharAtPosition,
  setCursorPosition
} from "./mask.utils";



export type KeyAction = (input: HTMLInputElement, position: number) => void;



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

  if (nextNonSpecialCharOffset >= 0) {
    setCursorPosition(input, position + 1 + nextNonSpecialCharOffset);
  }
  else {
    moveCursorToEnd(input);
  }

};



function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  setCursorPosition(input, previousNonSpecialCharPosition);

}


function handleBackSpace(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  overWriteCharAtPosition(input, previousNonSpecialCharPosition, '_');

  setCursorPosition(input, previousNonSpecialCharPosition);

}

function handleDelete(input, position) {

  overWriteCharAtPosition(input, position, '_');

}


export const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;
ACTIONS_PER_KEY_CODE[BACKSPACE] = handleBackSpace;
ACTIONS_PER_KEY_CODE[DELETE] = handleDelete;
