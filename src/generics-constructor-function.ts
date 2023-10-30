// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor
// functions.

function createInstance<T>(ctor: { new (): T }): T {
  return new ctor();
}

export {};
