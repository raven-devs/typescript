// node src/protecting-objects.js

// Prevents adding properties to an object
const person1 = {
  name: 'Jack',
  age: 22,
};

Object.preventExtensions(person1);
person1.name = 'John'; // will update
person1.location = 'Boston'; // undefined
console.log({ person1 });

// Prevents changes of object properties (not values, also prevents adding properties to an object)
const person2 = {
  name: 'Jack',
  age: 22,
};

Object.seal(person2);
delete person2.name; // will not delete
person2.location = 'Boston'; // undefined
console.log({ person2 });

// Prevents any changes to an object
const person3 = {
  name: 'Jack',
  age: 22,
};

Object.freeze(person3);
person3.name = 'John'; // will not update
person3.location = 'Boston'; // undefined
delete person3.age; // will not delete
console.log({ person3 });
