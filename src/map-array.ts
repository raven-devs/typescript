// npx ts-node src/map-array.ts

const myMap = new Map();
myMap.set('key1', 'val1');
myMap.set('key2', 'val2');
myMap.set('key3', 'val3');

console.log(myMap.get('key1'));

const arrFromMap = Array.from(myMap);
console.log({ arrFromMap });

const arrFromMap2 = Array.from([...myMap]);
console.log({ arrFromMap2 });

const arrFromMapKeys = Array.from(myMap.keys());
console.log({ arrFromMapKeys });

export {};
