let sales: number = 12345;
let course: string = 'TypeScript';
let is_published: boolean = true;

let numbers: number[] = [1, 2, 3];

// tuple example
let user: [number, string] = [1, 'Yo'];

// PascalCase
enum Size {Small = 1, Medium, Large}; // 0, 1, 2 auto iterates, string does not

let mySize: Size = Size.Medium;

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

// alias
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  }
};

// union
function kgToLbs(weight: number | string): number {
  // narrowing type
  if (typeof weight === 'number') {
    return weight * 2.2;
  }

  return parseInt(weight) * 2.2; 
}

// intersection (both)
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

type Quantity = 50 | 100;

// literal type, exact or specific value
let quantity: Quantity = 50;

// nullable
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());

  console.log('Yo');
}

greet(null); // undefined
