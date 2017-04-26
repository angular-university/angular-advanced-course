

import {SPECIAL_CHARACTERS} from "./mask_placeholder";
import * as includes from 'lodash.includes';
import * as findIndex from 'lodash.findindex';


export const never = () => false;

export const findFirstNonSpecialCharPosition =
  (value:string) => findIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );

