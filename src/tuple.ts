/**
 * npx ts-node src/tuple.ts
 */

// readonly tuples
const tuple: readonly [number, boolean, string] = [5, false, 'Coding God was here'];
console.log({ tuple });

tuple.push('some value');
console.log({ tuple });

// tuples can have optional properties
type Either2dOr3d = [number, number, number?];

// tuples can also have rest elements, which have to be an array/tuple type.
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ['hello', 1];
const b: StringNumberBooleans = ['beautiful', 2, true];
const c: StringNumberBooleans = ['world', 3, true, false, true, false, true];

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
readButtonInput('someName', 12, true, true, false, true);
readButtonInput(12, 'someName', true, true, false, true);

function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  // ...
}
readButtonInput2('someName', 12, true, true, false, true);
readButtonInput2(12, 'someName', true, true, false, true);

// named tuples
const graph: [x: number, y: number] = [55.2, 41.3];
console.log({ graph });

export {};
