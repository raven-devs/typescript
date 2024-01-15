// npx ts-node src/closure.ts

// self-invoking function, it runs only once, it sets the counter to zero (0), and returns a function expression
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

let result = add();
result = add();
result = add();
console.log({ result });

export {};
