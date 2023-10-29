// conditional type
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

// conditional type with generics
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

let a = createLabel('typescript');
let b = createLabel(2.8);
let c = createLabel(Math.random() ? 'hello' : 42);

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

// infer keyword
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

type Str2 = Flatten<string[]>;
type Num2 = Flatten<number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num3 = GetReturnType<() => number>;
type Str3 = GetReturnType<(x: string) => string>;
type BoolArr = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

export {};
