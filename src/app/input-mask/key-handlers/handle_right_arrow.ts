




import {KeyAction} from "./key_action";
import {setInputCursorPosition} from "../utils/set_input_cursor_position";



export const handleRightArrow:KeyAction = (input, position) => {

  const value = input.value;

  const nextNonSpaceOffset = value.slice(position + 1).search(/[^\s]{1}/);

  setInputCursorPosition(input, position + 1 + nextNonSpaceOffset);

};
