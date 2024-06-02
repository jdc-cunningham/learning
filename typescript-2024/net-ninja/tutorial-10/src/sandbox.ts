// function signatures

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`yo ${name} ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  }

  return numOne - numTwo;
}

