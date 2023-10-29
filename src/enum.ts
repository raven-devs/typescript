/**
 * npx ts-node src/enum.ts
 */

// numeric enum, index starting from 0
enum Directions {
  North,
  East,
  South,
  West,
}

console.log({ Directions });
console.log({ East: Directions.East });

// numeric enum, index starting from 1
enum Directions2 {
  North = 1,
  East,
  South,
  West,
}

console.log({ Directions2 });
console.log({ East2: Directions2.East });

const direction2 = Directions2.East;
console.log({ direction2 });

// string enum, index starting from 0
enum Directions3 {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}

console.log({ Directions3 });

export {};
