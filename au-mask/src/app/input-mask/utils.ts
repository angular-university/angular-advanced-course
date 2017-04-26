

import {SPECIAL_CHARACTERS} from "./mask_placeholder";
import * as includes from 'lodash.includes';
import * as findIndex from 'lodash.findindex';
import * as findLastIndex from 'lodash.findlastindex';


export const never = () => false;

export const findFirstNonSpecialCharPosition = (value:string) => findIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );

export const findLastNonSpecialCharPosition = (value:string) => findLastIndex(value, char => ! includes(SPECIAL_CHARACTERS, char) );



