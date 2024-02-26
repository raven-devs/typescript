const myArray = ['value1', 'value2', 'value3'];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has('value1'); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray

export {};
