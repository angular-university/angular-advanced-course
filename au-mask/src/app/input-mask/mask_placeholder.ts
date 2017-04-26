
import * as includes from 'lodash.includes';

export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "\/", "-"];


export function initPlaceholder(mask: string) {

  const chars = mask.split('');

  const value = chars.reduce((result, char) => {

    if (char == ' ') {
      return result += '  ';
    }

    return result += includes(SPECIAL_CHARACTERS, char) ? char : '_';

  }, '');

  return value;
}






