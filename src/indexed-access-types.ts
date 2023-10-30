// We can use an indexed access types to look up a specific property on another type.

type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];
type I1 = Person['age' | 'name'];
type I2 = Person[keyof Person];

// We can use `number` to get the type of an array’s elements.
const persons = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];
type PersonEntry = (typeof persons)[number];
type PersonEntryAge = (typeof persons)[number]['age'];
type PersonEntryAge2 = PersonEntry['age'];

// we can get index to get the type of an tuple's elements.
type Tuple = [string, number, boolean];
type TupleSecondElement = Tuple[2];

export {};
