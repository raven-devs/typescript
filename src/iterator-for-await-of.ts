// npx ts-node src/iterator-for-await-of.ts

const LIMIT = 3;

async function getData(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().getTime());
    }, 3000);
  });
}

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        const done = i === LIMIT;
        i = i + 1;
        const value = done ? undefined : await getData();
        return Promise.resolve({ value, done });
      },
      return() {
        // This will be reached if the consumer called 'break' or 'return' early in the loop.
        return Promise.resolve({ value: undefined, done: true });
      },
      throw() {
        return Promise.resolve({ value: undefined, done: true });
      },
    };
  },
};

async function main() {
  for await (const num of asyncIterable) {
    console.log({ num });
  }
}

main()
  .then()
  .catch((error) => console.error({ error }));

export {};
