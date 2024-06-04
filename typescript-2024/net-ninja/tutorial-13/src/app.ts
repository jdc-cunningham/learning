// classes
class Invoice {
  readonly client: string;
  private details: string;
  public amount: number; // public is an access modifier

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// short form of above
class Invoice2 {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];

// form is Element
const form = document.querySelector('.new-item-form')!; // HTMLFormElement vs. Element, class not necessarily a form

// type cast

// form2 is HTMLFormElement
const form2 = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  );
});
