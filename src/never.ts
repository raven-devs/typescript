// How `never` works with unions and intersections.

// Analogous to how number zero works in addition and multiplication, `never` type has special properties when used in
// union types and intersection types:
// - `never` gets dropped from union types, similiar to when zero added to a number gives the same number.
// e.g. type Res = never | string // string
// - `never` overrides other types in intersection types, similiar to when zero multiplying a number gives zero.
// e.g. type Res = never & string // never

// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and
// have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // shape is never here
      return shape;
  }
}

function format(value: string | number) {
  if (typeof value === 'string') {
    return value.trim();
  } else {
    return value.toFixed(2); // we're sure it's number
  }

  // not a string or number
  // "value" can't occur here, so it's type "never"
}

// It might be return type of a function that never returns. Here, both reportError and loop type is () => never.
const reportSomeError = function () {
  throw Error('my error');
};

const loop = function () {
  while (true) {}
};

// The compiler actually screens these if statements and can infer that in the third else statement there are no more
// types left for value to take on and thus the type become `never`. Another way to think about this is that in the first
// if statement the set of possible types shrinks from string | number to number only. Then in the seconds if statement
// it shrinks from number to `never`.

function typeGuards(value: string | number) {
  if (typeof value === 'string') {
    value; // Type string
  } else if (typeof value === 'number') {
    value; // Type number
  } else {
    value; // Type never
  }
}

// Since we can never assign a value to `never` type, we can use it to impose restrictions on functions for various use
// cases.
// We can use such a function to ensure exhaustive matching within switch and if-else statement: by using it as the
// default case, we ensure that all cases are covered, since what remains must be of type `never`. If we accidentally
// leave out a possible match, we get a type error.

type Color = 'red' | 'green' | 'blue';

function unknownColor(x: never): never {
  throw new Error('unknown color');
}

function getColorName(color: Color): string {
  switch (color) {
    case 'red':
      return 'is red';
    case 'green':
      return 'is green';
    case 'blue':
      return 'is green';
    default:
      return unknownColor(color); // forget to cover case when color is 'blue', argument of type 'string' is not assignable to parameter of type 'never'
  }
}

// Partially disallow structural typing.

// Let’s say we have a function that accepts a parameter of either the type VariantA or VariantB. But, the user mustn’t
// pass a type encompassing all properties from both types, i.e., a subtype of both types.
// We can leverage a union type VariantA | VariantB for the parameter. However, since type compatibility in TypeScript
// is based on structural subtyping, passing an object type that has more properties than the parameter’s type has to
// a function is allowed (unless you pass object literals):
type VariantA = {
  a: string;
};

type VariantB = {
  b: number;
};

const fn = (arg: VariantA | VariantB) => {
  // ...
};

const input = { a: 'foo', b: 123 };
fn(input); // TypeScript doens't complain but this shouldn't be allowed for our use case

// // By using `never`, we can partially disable structural typing and prevent users from passing object values that include
// // both properties:
type VariantA2 = {
  a: string;
  b?: never;
};

type VariantB2 = {
  b: number;
  a?: never;
};

const fn2 = (arg: VariantA2 | VariantB2) => {
  //...
};

const input2 = { a: 'foo', b: 123 };
fn2(input2);

// Prevent unintended API usage.

// Let’s say we want to create a Cache instance to read and store data from/to it:
type Read = {};
type Write = {};
declare const toWrite: Write;

declare class MyCache<T, R> {
  put(val: T): boolean;
  get(): R;
}

const cache = new MyCache<Write, Read>();
cache.put(toWrite);

// Now, for some reason we want to have a read-only cache only allowing for reading data via the get method.
// We can type the argument of the put method as never so it can’t accept any value passed in it:
declare class ReadOnlyCache<R> extends MyCache<never, R> {} // Now type parameter `T` inside MyCache becomes `never`

const readonlyCache = new ReadOnlyCache<Read>();
readonlyCache.put(data);

// Filter out union members from union types.
type Foo = {
  name: 'foo';
  id: number;
};

type Bar = {
  name: 'bar';
  id: number;
};

type All = Foo | Bar;
type ExtractTypeByName<T, G> = T extends { name: G } ? T : never;
type ExtractedType = ExtractTypeByName<All, 'foo'>;

// Filter out keys in mapped types.
// In TypeScript, types are immutable. If we want to delete a property from an object type, we must create a new one
// by transforming and filtering the existing one. When we conditionally re-map keys in mapped types to never, those
// keys get filtered out.
type Filter<Obj extends Object, ValueType> = {
  [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]: Obj[Key];
};

interface Foo2 {
  name: string;
  id: number;
}

type Filtered = Filter<Foo2, string>;

// How to check for `never`
type IsNever<T> = [T] extends [never] ? true : false;
type Res1 = IsNever<never>;
type Res2 = IsNever<number>;

export {};
