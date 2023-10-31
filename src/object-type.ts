// The `object` type represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol,
// null, or undefined

declare function fn(o: object): void;

fn({ prop: 0 }); // OK
fn(null); // OK
fn(42); // Error
fn('string'); // Error
fn(false); // Error
fn(undefined); // Error

export {};
