// npx ts-node src/in-operator.ts

const person = {
  name: 'Jack',
  age: 22,
  location: 'Boston',
};
const result = 'age' in person;
console.log({ result });
