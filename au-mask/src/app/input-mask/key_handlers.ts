
import {setInputCursorPosition} from "./set_input_cursor_position";
import {BACKSPACE, DELETE, LEFT_ARROW, RIGHT_ARROW} from "./key_codes";
import {applyCharToInput} from "./apply_char_to_input";
import {findFirstNonSpecialCharPosition, findLastNonSpecialCharPosition} from "./utils";



export type KeyAction = (input: HTMLInputElement, position: number) => void;



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpecialCharOffset = findFirstNonSpecialCharPosition(value.slice(position + 1));

  setInputCursorPosition(input, position + 1 + nextNonSpecialCharOffset);

};



function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  setInputCursorPosition(input, previousNonSpecialCharPosition);

}


function handleBackSpace(input, position) {

  const value = input.value;

  const previousNonSpecialCharPosition = findLastNonSpecialCharPosition(value.slice(0, position));

  applyCharToInput(input, previousNonSpecialCharPosition, '_');

  setInputCursorPosition(input, previousNonSpecialCharPosition);

}

function handleDelete(input, position) {

  applyCharToInput(input, position, '_');

}


export const ACTIONS_PER_KEY_CODE: {[key:number]: KeyAction} = {};

ACTIONS_PER_KEY_CODE[RIGHT_ARROW] = handleRightArrow;
ACTIONS_PER_KEY_CODE[LEFT_ARROW] = handleLeftArrow;
ACTIONS_PER_KEY_CODE[BACKSPACE] = handleBackSpace;
ACTIONS_PER_KEY_CODE[DELETE] = handleDelete;
