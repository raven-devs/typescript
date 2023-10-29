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

export {};
