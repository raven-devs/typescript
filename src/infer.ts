// The `infer` keyword serves as a local variable for a type value.

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Str2 = Flatten<string[]>;
type Num2 = Flatten<number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num3 = GetReturnType<() => number>;
type Str3 = GetReturnType<(x: string) => string>;
type BoolArr = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

export {};
