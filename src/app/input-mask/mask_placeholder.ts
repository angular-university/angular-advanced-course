

const SPECIAL_CHARS_REGEX = {
  ' ': {
    regex: /[\s]{1}/,
    replaceWith: '  '
  },
  '-': {
    regex: /[-]{1}/,
    replaceWith: '-'
  }
};

export const SPECIAL_CHARACTERS = Object.keys(SPECIAL_CHARS_REGEX);

export function initPlaceholderMask(input:string) {

  const chars = input.split('');

  const value = chars.reduce((result, char) =>  {

    return result += SPECIAL_CHARS_REGEX[char] ? SPECIAL_CHARS_REGEX[char].replaceWith : '_';

  },'');

  return '  ' + value;
}



export function findMaskDigitForPosition(currentInputValue:string, cursorPosInsideInput:number, mask:string) {




  return "9";


}
