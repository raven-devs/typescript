// `Readonly` is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: 'Dylan',
  age: 35,
};
person.name = 'Israel';

export {};
