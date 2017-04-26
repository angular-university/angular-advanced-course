

import {setInputCursorPosition} from "../utils/set_input_cursor_position";
import * as findLastIndex from 'lodash.findlastindex';


export function handleLeftArrow(input, position) {

  const value = input.value;

  const previousNonSpacePosition = findLastIndex(value.slice(0, position), char => char !== ' ' );

  setInputCursorPosition(input, previousNonSpacePosition);

}
