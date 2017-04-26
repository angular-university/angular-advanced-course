
const SPECIAL_CHARS_REGEX = {
  ' ': {
    replaceWith: '  '
  },
  '-': {
    replaceWith: '-'
  },
  '/': {
    replaceWith: '/'
  },
  '+': {
    replaceWith: '+ '
  }
};


export const SPECIAL_CHARACTERS = Object.keys(SPECIAL_CHARS_REGEX);


export function initPlaceholder(mask: string) {

  const chars = mask.split('');

  const value = chars.reduce((result, char) => {

    return result += SPECIAL_CHARS_REGEX[char] ? SPECIAL_CHARS_REGEX[char].replaceWith : '_';

  }, '');

  return '  ' + value;
}


export function initHelperMask(mask: string) {

  const chars = mask.split('');

  const value = chars.reduce((result, char) => {

    return result += SPECIAL_CHARS_REGEX[char] ? SPECIAL_CHARS_REGEX[char].replaceWith : char;

  }, '');

  return '  ' + value;
}




