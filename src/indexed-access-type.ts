// we can use an indexed access type to look up a specific property on another type

type Person = { age: number; name: string; alive: boolean };

type Age = Person['age']; // number

type I1 = Person['age' | 'name']; // string | number

type I2 = Person[keyof Person]; // string | number | boolean

// We can use number to get the type of an array’s elements.

const persons = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type PersonEntry = (typeof persons)[number];

type PersonEntryAge = (typeof persons)[number]['age'];
type PersonEntryAge2 = PersonEntry['age'];

export {};
