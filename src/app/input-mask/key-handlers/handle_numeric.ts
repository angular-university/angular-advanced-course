

import {handleRightArrow} from "./handle_right_arrow";
import {KeyAction} from "./key_action";


export const handleNumeric:KeyAction = (input, position, mask, key, keyCode) => {

  if ( keyCode < 48 || keyCode > 57 ) {
    return;
  }

  const currentValue = input.value;

  input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);

  handleRightArrow(input, position);

};
