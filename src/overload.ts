// npx ts-node src/overload-constructors-method.ts

// In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
// These first two signatures are called the overload signatures.

// Then, we wrote a function implementation with a compatible signature. Functions have an implementation signature,
// but this signature can’t be called directly. Even though we wrote a function with two optional parameters after the
// required one, it can’t be called with two parameters!

function makeDate(timestamp: number): Date; // overload signature, can be called
function makeDate(m: number, d: number, y: number): Date; // // overload signature, can be called
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  // implementation signature, can NOT be called
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

// overload a constructor and a method

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

  fn(x: string, y: string): void;
  fn(x: number): void;
  fn(x: number, y: string, z: string): void;
  fn(...args: any[]): void {
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
  person1.fn('arg1', 'arg2');
  person1.fn(12);
  person1.fn(12, 'arg1', 'arg2');

  const person2 = new Person(22);
}

main();

export {};
