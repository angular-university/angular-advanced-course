

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



export function applyMask(input:string) {

  const chars = input.split('');

  const value = chars.reduce((result, char) =>  {

    return result += SPECIAL_CHARS_REGEX[char] ? SPECIAL_CHARS_REGEX[char].replaceWith : '_';

  },'');

  return '  ' + value;
}

