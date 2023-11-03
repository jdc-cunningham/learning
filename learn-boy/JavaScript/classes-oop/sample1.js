class Person {
  name;

  constructor(name) {
    this.naem = name;
  }

  introduceSelf() {
    console.log('sup G');
  }
}

const joe = new Person('joe');

joe.introduceSelf();