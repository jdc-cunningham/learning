let id: number = 5;
let company: string = 'Apple';
let isPublished: boolean = true;
let x: any = 'yo';
let age: number;
let ids: number[] = [1, 2, 3];
let figs: any[] = [1, 'a', {}];

x = true;
age = 30;

// Tuple
let person: [number, string, boolean] = [1, 'Joe', true];

// Tuple array
let employee: [number, string][];

employee = [
  [1, 'Joe'],
  [2, 'Ray'],
];

// Union
let pId: string | number = 22;

pId = '22'; // or 22

// Enum (named constant)
enum Direction1 {
  Up, // Up = 1, rest increment due to default values
  Down,
  Left,
  Right,
};

console.log(Direction1.Up);
