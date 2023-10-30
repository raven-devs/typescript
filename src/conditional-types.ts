// SomeType extends OtherType ? TrueType : FalseType;

// basic
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

// with generics
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'Not implemented';
}

const a = createLabel('typescript');
const b = createLabel(2.8);
const c = createLabel(Math.random() ? 'hello' : 42);

// conditional type with constraints
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;

// flatten array types to their element types, but leave them alone otherwise
type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;
type Num = Flatten<number>;

// extends with default
type Fn<A extends string, B extends string = 'world'> = [A, B];
type Result = Fn<'hello'>;

export {};
