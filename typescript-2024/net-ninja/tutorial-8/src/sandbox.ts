// function type
let greet = () => {
  console.log('yo');
};

let fcn: Function;

// c is undefined if not specified
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
}

const minus = (a: number, b: number): number => {
  return a - b;
}
