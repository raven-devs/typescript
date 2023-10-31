async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 3000);
  });
}

async function main() {
  const response = await getData();
  console.log({ response });
}

main()
  .then()
  .catch((e) => console.error(e));
