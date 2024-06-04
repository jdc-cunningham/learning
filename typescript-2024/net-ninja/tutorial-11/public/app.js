"use strict";
const anchor = document.querySelector('a'); // put ! at the end if certain not null eg. ('a')!;
// form is Element
const form = document.querySelector('.new-item-form'); // HTMLFormElement vs. Element, class not necessarily a form
// type cast
// form2 is HTMLFormElement
const form2 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
