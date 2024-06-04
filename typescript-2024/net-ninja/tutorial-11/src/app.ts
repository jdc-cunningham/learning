const anchor = document.querySelector('a'); // put ! at the end if certain not null eg. ('a')!;

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
