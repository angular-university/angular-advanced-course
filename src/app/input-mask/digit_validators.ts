

type DigitValidator = (char:string) => boolean;

const numericValidator = char => /[0-9]{1}/.test(char);

const lowerCaseValidator = char => /[a-z]{1}/.test(char);

const upperCaseValidator = char => /[A-Z]{1}/.test(char);


export const MASK_DIGIT_VALIDATORS: {[key:string]:DigitValidator} = {
  '9': numericValidator,
  'a': lowerCaseValidator,
  'A': upperCaseValidator
};

