// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor
// functions.

function createInstance<T>(c: { new (): T }): T {
  return new c();
}

export {};
