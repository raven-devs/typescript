// npx ts-node src/overload-constructors-method.ts

class Person {
  constructor(x: string, y: string);
  constructor(x: number);
  constructor(x: number, y: string, z: string);
  constructor(...args: any[]) {
    if (args.length === 3) {
      console.log('three constructor argument called');
      return;
    }

    if (args.length === 2) {
      console.log('two constructor argument called');
      return;
    }

    if (args.length === 1) {
      console.log('one constructor argument called');
      return;
    }
  }

  doSmth(x: string, y: string): void;
  doSmth(x: number): void;
  doSmth(x: number, y: string, z: string): void;
  doSmth(...args: any[]): void {
    if (args.length === 3) {
      console.log('three method argument called');
      return;
    }

    if (args.length === 2) {
      console.log('two method argument called');
      return;
    }

    if (args.length === 1) {
      console.log('one method argument called');
      return;
    }
  }
}

function main() {
  const person1 = new Person('firstName', 'lastName');
  person1.doSmth('arg1', 'arg2');
  person1.doSmth(12);
  person1.doSmth(12, 'arg1', 'arg2');

  const person2 = new Person(22);
}

main();

export {};
