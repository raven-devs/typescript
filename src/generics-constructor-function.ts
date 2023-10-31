// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor
// functions.

type Constructor<T> = new (...args: any[]) => T;

function createInstance<T>(constructor: Constructor<T>): T {
  return new constructor();
}

export {};
