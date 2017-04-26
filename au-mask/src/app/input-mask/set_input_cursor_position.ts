

export function setInputCursorPosition(input, position) {
  if (input.setSelectionRange) {
    //input.focus();
    input.setSelectionRange(position, position);
  }
}



