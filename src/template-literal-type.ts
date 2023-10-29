// Template Literal Types allows us to create more precise types using template literals.
// We can define custom types that depend on the actual values of strings at compile time.

type Color = 'red' | 'green' | 'blue';
type HexColor<T extends Color> = `#${string}`;

const myColor: HexColor<'blue'> = '#0000FF';

export {};
