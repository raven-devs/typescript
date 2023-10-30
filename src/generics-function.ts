function fnWithGenerics<T extends { length: number }>(obj: T) {
  console.log(obj.length);
}

function fnWithoutGenerics(obj: { length: number }) {
  console.log(obj.length);
}

function main() {
  const str = 'test str';
  const arr = ['one', 'two'];
  const num = 12;

  fnWithGenerics(str);
  fnWithoutGenerics(str);

  fnWithGenerics(arr);
  fnWithoutGenerics(arr);

  fnWithGenerics(num);
  fnWithoutGenerics(num);
}

main();

export {};
