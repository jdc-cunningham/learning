// generics allow us to create reusable blocks of code with different types

// const addUID = (obj: object) => {
// const addUID = <T>(obj: T) => {
// const addUID = <T extends object>(obj: T) => {
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

interface Resource<T>{
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['a', 'b']
}
