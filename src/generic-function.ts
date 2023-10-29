function doSmth<T extends { length: number }>(obj: T) {
  console.log(obj.length);
}

function doSmth2(obj: { length: number }) {
  console.log(obj.length);
}

function main() {
  const str = 'test str';
  const arr = ['one', 'two'];
  const num = 12;

  doSmth(str);
  doSmth2(str);

  doSmth(arr);
  doSmth2(arr);

  doSmth(num);
  doSmth2(num);
}

main();

export {};
