// The mapping is done using this syntax [K in keyof T], where the `keyof` operator gives us property names as a string
// union type.

// make all props of type `string`
type User = {
  name: string;
  age: number;
};

type StringifyProp<T> = {
  [K in keyof T]: string;
};

type UserWithStringProps = StringifyProp<User>;

// make all props boolean
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

// to create a local type variable, we can use the `infer` keyword
type A = 'foo'; // global scope type variable
type B = A extends infer C
  ? C extends 'foo'
    ? true
    : false // *only* inside this expression, C represents A, it is a local type variable
  : never;

// we can use the `infer` keyword to perform pattern matching
type Str = 'foo-bar';
type Bar = Str extends `foo-${infer rest}` ? rest : never;

// There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and
// optionality respectively. You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix,
// then + is assumed.

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User2 = Concrete<MaybeUser>;

// Key Remapping via `as`
// syntax:
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

// filter props that are of type `string`
type FilterStringProp<T> = {
  [K in keyof T as T[K] extends string ? K : never]: string;
};

type FilteredUser = FilterStringProp<User>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};

interface Circle {
  kind: 'circle';
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

export {};
