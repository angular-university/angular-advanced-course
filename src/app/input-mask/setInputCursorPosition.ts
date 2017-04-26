


export function setInputCursorPosition(input, position) {
  if (position < 0) {
    return;
  }
  if(input) {
    if(input.createTextRange) {
      var range = input.createTextRange();
      range.move('character', position);
      range.select();
    }
    else {
      if(input.selectionStart) {
        input.focus();
        input.setSelectionRange(position, position);
      }
      else
        input.focus();
    }
  }
}
