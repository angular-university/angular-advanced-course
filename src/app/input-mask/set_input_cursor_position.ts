
export function setInputCursorPosition(input, position) {
  if (position < 0) {
    return;
  }
  if (input) {
    if (input.selectionStart) {
      input.focus();
      input.setSelectionRange(position, position);
    }
    else
      input.focus();
  }
}
