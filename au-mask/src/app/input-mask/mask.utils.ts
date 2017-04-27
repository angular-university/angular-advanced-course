


import * as includes from 'lodash.includes';
import * as findIndex from 'lodash.findindex';
import * as findLastIndex from 'lodash.findlastindex';


export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "\/", "-"];


export const never = () => false;

export function setCursorPosition(input: HTMLInputElement, position:number) {
  input.setSelectionRange(position, position);
}


export function moveCursorToEnd(input: HTMLInputElement) {
  const value = input.value;
  const lastPosition = value.length;
  input.setSelectionRange(lastPosition, lastPosition);
}


export function overWriteCharAtPosition(input:HTMLInputElement, position:number, key: string) {

  const currentValue = input.value;

  input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}


export const findFirstNonSpecialCharPosition = (value:string) => findIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );


export const findLastNonSpecialCharPosition = (value:string) => findLastIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );



