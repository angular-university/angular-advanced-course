

export function setInputCursorPosition(input, position) {
  if (position < 0) {
    return;
  }
  input.setSelectionRange(position, position);
}

