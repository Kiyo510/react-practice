interface Greetable {
  readonly name: string;
  outputName?: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Max');
user1.greet('Hello Max!');
