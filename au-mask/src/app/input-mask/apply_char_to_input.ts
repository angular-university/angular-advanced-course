


export function applyCharToInput(input:HTMLInputElement, position:number, key: string) {

  const currentValue = input.value;

  input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}
