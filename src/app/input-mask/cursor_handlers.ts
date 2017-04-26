

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

