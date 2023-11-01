// npx ts-node src/const-type.ts

// We can get a more precise and immutable type by writing as const after a literal.

// type is { readonly prop: "hello" }
const immutableObj = { prop: 'hello' } as const;
immutableObj.prop = 'hi';

const immutableArr = ['val1', 'val2', 'val3'] as const;
// const immutableArr: readonly string[] = ['val1', 'val2', 'val3'];

fn(immutableObj, immutableArr);

function fn(arg1: { prop: string }, arg2: readonly string[]) {
  arg1.prop = 'updated'; // runtime error
  arg2.push('new val');

  console.log({ arg1, arg2 });
}
