// `Omit` removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
  // `Omit` has removed age and location from the type and they can't be defined here
};

// `Pick` removes all but the specified keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob2: Pick<Person, 'name'> = {
  name: 'Bob',
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

export {};
